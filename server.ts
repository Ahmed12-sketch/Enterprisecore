import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Set up simple local database persistence
const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "inquiries.json");

interface Inquiry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  companySize: string;
  message: string;
  timestamp: string;
  aiAnalysis?: string;
}

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initial mockup data to populate if db is empty
const defaultInquiries: Inquiry[] = [
  {
    id: "inq-1",
    firstName: "Marcus",
    lastName: "Vance",
    email: "m.vance@acmetronics.org",
    companySize: "1000+",
    message: "We need a highly available database cluster with automatic multi-active replication across US-East and EU-West regions. Target load is 50,000 requests per second under peak periods.",
    timestamp: "10:15 AM - Today",
    aiAnalysis: "### 🏢 EnterpriseCore Solutions Architect Blueprint\n\n- **Target Deployment**: Multi-region active-active cluster spanning US-East & EU-West zones, utilizing a decoupled server-less ledger backend.\n- **Database Infrastructure**: Managed Spanner instances with global consensus protocols, ensuring zero replication lag (<10ms).\n- **Scaling Security**: High-throughput Cloud Armor balancing with end-to-end TLS 1.3 encryption and zero-trust identity federation."
  },
  {
    id: "inq-2",
    firstName: "Sarah",
    lastName: "Jenkins",
    email: "sarah.j@innovatetech.io",
    companySize: "201-1000",
    message: "Seeking a zero-trust network perimeter config to safeguard microservices across our multi-cloud deployment.",
    timestamp: "08:42 AM - Today"
  }
];

function readDB(): Inquiry[] {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(defaultInquiries, null, 2), "utf-8");
    return defaultInquiries;
  }
  try {
    const data = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to read inquiries file", err);
    return defaultInquiries;
  }
}

function writeDB(data: Inquiry[]) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to write inquiries file", err);
  }
}

// --- API ENDPOINTS ---

// Check API health status
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Retrieve all customer inquiries
app.get("/api/inquiries", (req, res) => {
  const data = readDB();
  res.json(data);
});

// Create a new inquiry
app.post("/api/inquiries", (req, res) => {
  const { firstName, lastName, email, companySize, message } = req.body;
  
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const inquiries = readDB();
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const newInquiry: Inquiry = {
    id: "inq-" + Math.random().toString(36).substring(2, 9),
    firstName,
    lastName,
    email,
    companySize: companySize || "Not specified",
    message,
    timestamp: `${time} - Today`
  };

  inquiries.unshift(newInquiry);
  writeDB(inquiries);
  res.status(201).json(newInquiry);
});

// Analyze an inquiry using server-side Gemini Model
app.post("/api/inquiries/:id/analyze", async (req, res) => {
  const { id } = req.params;
  const inquiries = readDB();
  const inquiryIndex = inquiries.findIndex((inq) => inq.id === id);

  if (inquiryIndex === -1) {
    return res.status(404).json({ error: "Inquiry not found" });
  }

  const targetInquiry = inquiries[inquiryIndex];

  // Lazy Initialization of GoogleGenAI SDK to prevent app crashes on boot if the key hasn't been set yet
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "GEMINI_API_KEY is not defined. Please configure it in your Settings > Secrets panel."
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });

    const prompt = `You are a Principal Solutions Architect at EnterpriseCore. Analyze this client sales inquiry and design/propose a customized, highly technical architecture recommendation blueprint tailored specifically to their needs.
Company Name/Client: ${targetInquiry.firstName} ${targetInquiry.lastName}
Company Size / Dimension scope: ${targetInquiry.companySize}
Brief Project / Target Problem: "${targetInquiry.message}"

Generate a highly structured Markdown proposal with 3 bullet points:
- Bullet 1 should outline a targeted infrastructure deployment (Server-less, container orchestration, edge routers, etc.).
- Bullet 2 should outline database/storage architecture balancing requirements.
- Bullet 3 should address security, identity federation, and SOC2/ISO compliance alignment.

Structure your final response with a clean display header: "### 🏢 EnterpriseCore Solutions Architect Blueprint". Keep the advice elegant, dense, professional, and strictly relevant to the client request.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        temperature: 0.7,
        systemInstruction: "You are an elite, professional architectural designer for global enterprise networks. Your responses must be structured, technical, clear, and perfectly formatted as Markdown advice snippets."
      }
    });

    const blueprintText = response.text || "### 🏢 EnterpriseCore Solutions Architect Blueprint\n\n- Could not generate analysis. Please try again.";
    
    // Save generated blueprint report back to database
    inquiries[inquiryIndex].aiAnalysis = blueprintText;
    writeDB(inquiries);

    res.json(inquiries[inquiryIndex]);
  } catch (error: any) {
    console.error("Gemini API call failed:", error);
    res.status(500).json({
      error: "Failed to compile AI analysis report. " + (error?.message || error)
    });
  }
});

// Delete an inquiry
app.delete("/api/inquiries/:id", (req, res) => {
  const { id } = req.params;
  let inquiries = readDB();
  const initialLength = inquiries.length;
  inquiries = inquiries.filter((inq) => inq.id !== id);

  if (inquiries.length === initialLength) {
    return res.status(404).json({ error: "Inquiry not found" });
  }

  writeDB(inquiries);
  res.json({ success: true, message: "Inquiry cleared from staging records" });
});

// --- VITE INTERACTION MIDDLEWARE ---

async function start() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully activated up on http://localhost:${PORT}`);
  });
}

start();
