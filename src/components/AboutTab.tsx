import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building, 
  Users, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Zap, 
  Scale, 
  HeartHandshake, 
  Send, 
  Trash2, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  UserCheck,
  Building2,
  Lock
} from "lucide-react";
import { Leader, Inquiry } from "../types";

export default function AboutTab() {
  // Sales Contact Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [message, setMessage] = useState("");
  
  // Submission lists
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [analyzingIds, setAnalyzingIds] = useState<Record<string, boolean>>({});
  const [apiError, setApiError] = useState<string | null>(null);

  // Fetch inquiries from backend API
  const fetchInquiries = async () => {
    try {
      const res = await fetch("/api/inquiries");
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch (err) {
      console.error("Failed to fetch inquiries context", err);
    }
  };

  // Load inquiries from Express server on mount
  useEffect(() => {
    fetchInquiries();
  }, []);

  // Grid point hover state
  const [hoveredGridDot, setHoveredGridDot] = useState<number | null>(null);

  const leaders: Leader[] = [
    {
      name: "Marcus Thorne",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Marcus, with two decades scaling telecommunications grids, guides the ultimate vision of EnterpriseCore's scaling capabilities."
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "An open-source storage veteran, Elena champions our zero-trust system protocols and horizontal auto-balancing directories."
    },
    {
      name: "Julian Vance",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Julian coordinates global integration networks, maintaining client-focused delivery parameters across international zones."
    },
    {
      name: "Sarah Chen",
      role: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Sarah manages commercial allocations, backing corporate audits with sound budgetary strategies and balanced metrics."
    }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      return;
    }

    setApiError(null);

    const payload = {
      firstName,
      lastName,
      email,
      companySize: companySize || "Not specified",
      message
    };

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        // Reset inputs
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompanySize("");
        setMessage("");

        // Show beautiful success
        setSubmittedSuccess(true);
        // Refresh inquiry logs lists
        await fetchInquiries();
      } else {
        const errData = await res.json();
        setApiError(errData.error || "Failed to submit inquiry");
      }
    } catch (err) {
      console.error("Inquiry submission failed", err);
      setApiError("Network error. Please make sure the backend server is online.");
    }
  };

  const handleClearInquiries = async () => {
    setApiError(null);
    for (const inq of inquiries) {
      try {
        await fetch(`/api/inquiries/${inq.id}`, { method: "DELETE" });
      } catch (err) {
        console.error(err);
      }
    }
    await fetchInquiries();
  };

  const handleDeleteInquiry = async (id: string) => {
    setApiError(null);
    try {
      const res = await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
      if (res.ok) {
        await fetchInquiries();
      }
    } catch (err) {
      console.error("Failed to delete inquiry", err);
    }
  };

  const handleAnalyzeInquiry = async (id: string) => {
    setAnalyzingIds((prev) => ({ ...prev, [id]: true }));
    setApiError(null);

    try {
      const res = await fetch(`/api/inquiries/${id}/analyze`, {
        method: "POST"
      });

      if (res.ok) {
        await fetchInquiries();
      } else {
        const errData = await res.json();
        setApiError(errData.error || "Verification failed. Inspect key settings.");
      }
    } catch (err) {
      console.error("AI Generation request failed", err);
      setApiError("Network exception. Please assure server has finished booting.");
    } finally {
      setAnalyzingIds((prev) => ({ ...prev, [id]: false }));
    }
  };

  const renderBlueprintMarkdown = (text: string) => {
    const lines = text.split("\n");
    return (
      <div className="space-y-2.5 mt-3 p-4 bg-blue-50/60 border border-blue-100/50 rounded-2xl text-slate-800 font-sans shadow-sm">
        {lines.map((line, idx) => {
          if (line.startsWith("###")) {
            return (
              <h5 key={idx} className="font-bold text-xs text-blue-700 flex items-center mb-1">
                <Sparkles className="h-4 w-4 mr-1.5 animate-pulse text-blue-550 shrink-0" />
                {line.replace("###", "").trim()}
              </h5>
            );
          } else if (line.startsWith("-") || line.startsWith("*")) {
            const content = line.substring(1).trim();
            const boldParts = content.split("**");
            return (
              <div key={idx} className="flex items-start text-[11px] leading-relaxed pl-1">
                <span className="text-blue-500 mr-2 shrink-0 select-none">•</span>
                <span>
                  {boldParts.map((part, pIdx) => 
                    pIdx % 2 === 1 ? <strong key={pIdx} className="font-bold text-slate-900">{part}</strong> : part
                  )}
                </span>
              </div>
            );
          } else if (line.trim() === "") {
            return null;
          } else {
            return <p key={idx} className="text-[11px] leading-relaxed text-slate-600">{line}</p>;
          }
        })}
      </div>
    );
  };

  return (
    <div id="about-tab-view" className="space-y-24 py-12">
      
      {/* 1. Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12" id="about-hero">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                <Building className="h-3.5 w-3.5 text-blue-600" />
                <span>Mission Driven</span>
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Engineering the Backbone <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 bg-clip-text text-transparent">
                  of Modern Operations
                </span>
              </h1>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
              We resolve complexity. EnterpriseCore provides high-performance platforms that let global teams scale, secure workloads, and deliver with speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" id="about-hero-actions">
              <a 
                href="#sales-form-section" 
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 hover:bg-blue-700 transition-colors"
              >
                Inquire Sales Team
                <ChevronRight className="ml-1.5 h-4.5 w-4.5" />
              </a>
              <button 
                onClick={() => document.getElementById("executive-leadership")?.scrollIntoView({ behavior: "smooth" })} 
                className="inline-flex items-center justify-center rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-colors"
              >
                Discover Leadership
              </button>
            </div>
          </div>

          {/* Headquarters Mockup Interior Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200" id="about-hero-image-box">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
              alt="EnterpriseCore Architecture Corporate Headquarters Office Layout" 
              className="w-full aspect-[4/3] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/20 shadow text-xs">
              <span className="font-bold text-slate-900 block">World HQ Precinct</span>
              <span className="text-slate-500 font-mono text-[10px]">Manhattan, New York</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Core Values Bento Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12" id="our-core-values">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">The Standards We Maintain</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="text-slate-500">
            A corporate philosophy structured to deliver unyielding reliability across all digital integration fronts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Radical Security */}
          <div className="md:col-span-2 sleek-card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-blue-50/30 pointer-events-none group-hover:scale-105 transition-transform">
              <ShieldCheck className="h-32 w-32" />
            </div>
            <div className="space-y-4 max-w-md relative z-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#3b82f6]">
                <ShieldCheck className="h-6 w-6" id="val-icon-1" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Radical Security</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Security is not an afterthought, but our core framework parameter. All telemetry streams and database access tokens undergo real-time cryptographic screening to ensure airtight transaction containment.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-4">
              <span className="text-[10px] text-slate-400 font-mono font-bold uppercase">Compliance audit</span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">SOC2 Certified</span>
            </div>
          </div>

          {/* Card 2: Velocity (Dark Theme highlights) */}
          <div className="bg-slate-950 border border-slate-900 rounded-2xl p-8 flex flex-col justify-between text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
              <Zap className="h-32 w-32" />
            </div>
            <span className="text-[9px] font-mono tracking-widest text-[#3b82f6] bg-white/10 px-2 py-0.5 rounded w-fit font-bold uppercase">
              Operational Speed
            </span>
            <div className="space-y-4 mb-4 mt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3b82f6] text-white shadow">
                <Zap className="h-5 w-5" id="val-icon-2" />
              </div>
              <h3 className="text-xl font-bold">Velocity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We believe in low-overhead execution. Minimal commercial lag translates directly to systemic scaling.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <div className="text-2xl font-black text-emerald-400 font-mono">99.99%</div>
              <div className="text-[9px] uppercase text-slate-400 font-bold font-mono">Uptime Commitment</div>
            </div>
          </div>

          {/* Card 3: Integrity */}
          <div className="sleek-card p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Scale className="h-6 w-6" id="val-icon-3" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Integrity</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                A commitment to transparency. Our system telemetry indicators match raw benchmarks exactly—no synthetic smoothing.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 flex items-center text-xs text-slate-400 font-medium space-x-2 mt-4">
              <HeartHandshake className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Full Audit Records Retained</span>
            </div>
          </div>

          {/* Card 4: Scalability (Interactive 9-dot layout) */}
          <div className="md:col-span-2 sleek-card p-8 flex flex-col md:flex-row gap-6 justify-between">
            <div className="space-y-4 max-w-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                  <Scale className="h-6 w-6" id="val-icon-4" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">Scalability</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We formulate horizontal platform pools that dynamically increase processing thresholds based on instant system queuing indexes.
                </p>
              </div>

              <div className="text-[10px] text-slate-400 tracking-wide font-mono">
                Hover over cluster nodes to trigger auto-load-balancers.
              </div>
            </div>

            {/* Interactive Grid of 9 nodes */}
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center space-y-4">
              <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono">
                {hoveredGridDot !== null ? `Cluster Group node: ${hoveredGridDot + 1} (LOADING METRIC)` : "CLUSTER TOPOLOGY MONITOR"}
              </div>
              <div className="grid grid-cols-3 gap-3.5" id="interactive-val-grid">
                {Array.from({ length: 9 }).map((_, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredGridDot(idx)}
                    onMouseLeave={() => setHoveredGridDot(null)}
                    className={`h-11 w-11 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center border ${
                      hoveredGridDot === idx
                        ? "bg-blue-600 border-blue-600 scale-110 shadow-lg shadow-blue-500/20 text-white"
                        : "bg-white border-slate-200 hover:border-blue-400 text-slate-400"
                    }`}
                  >
                    <span className="text-xs font-mono font-bold">{idx + 1}</span>
                  </div>
                ))}
              </div>
              {hoveredGridDot !== null && (
                <div className="text-[10px] font-bold text-blue-600 font-mono animate-pulse">
                  ROUTE LOAD TRANSFERED SUCCESSFULLY -- NODE {hoveredGridDot + 1} ACTIVE
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Executive Leadership Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12" id="executive-leadership">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">The Innovators</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Executive Leadership
          </h2>
          <p className="text-slate-500">
            Backed by decades of operational performance. Meet the enterprise-driven pioneers architecting next-gen system solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              id={`leader-card-${index}`}
            >
              <div>
                <div className="aspect-square w-full overflow-hidden border-b border-slate-100 bg-slate-50 relative group">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[9px] text-white uppercase font-bold tracking-widest font-mono">
                    verified key
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-slate-950 tracking-tight">{leader.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">{leader.role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">{leader.bio}</p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-slate-50 bg-slate-50/50 flex space-x-3 text-xs text-slate-400 font-mono">
                <a href={`mailto:${leader.name.toLowerCase().replace(" ", ".")}@enterprisecore.com`} className="hover:text-blue-600 flex items-center space-x-1">
                  <Mail className="h-3 w-3 shrink-0" />
                  <span>Email Secure</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Sales Request + Manhattan Map Office Info */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12" id="sales-form-section">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">Get in Contact</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Connect with Sales
          </h2>
          <p className="text-slate-500">
            Submit a formal project brief or cluster evaluation brief. Our solutions division will issue a custom response diagram within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 shadow-xl rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-slate-950 border-b border-slate-100 pb-3 flex items-center">
              <UserCheck className="h-5 w-5 text-blue-600 mr-2" />
              Sales Assistance Request
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4" id="sales-contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-semibold text-slate-500 mb-1">First Name *</label>
                  <input
                    id="first-name"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Marcus"
                    className="w-full text-xs sm:text-sm border border-slate-200 hover:border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-semibold text-slate-500 mb-1">Last Name *</label>
                  <input
                    id="last-name"
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Vance"
                    className="w-full text-xs sm:text-sm border border-slate-200 hover:border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="work-email" className="block text-xs font-semibold text-slate-500 mb-1">Work Email *</label>
                <input
                  id="work-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="marcus.vance@acme.com"
                  className="w-full text-xs sm:text-sm border border-slate-200 hover:border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company-size" className="block text-xs font-semibold text-slate-500 mb-1">Company Size (Select Domain Size)</label>
                <select
                  id="company-size"
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full text-xs sm:text-sm border border-slate-200 hover:border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 bg-white focus:outline-none transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="1-50">1 - 50 staff (Starter focus)</option>
                  <option value="51-200">51 - 200 staff (Venture scale)</option>
                  <option value="201-1000">201 - 1000 staff (Enterprise target)</option>
                  <option value="1000+">1000+ staff (Global enterprise matrix)</option>
                </select>
              </div>

              <div>
                <label htmlFor="project-brief" className="block text-xs font-semibold text-slate-500 mb-1">Message / Project Brief *</label>
                <textarea
                  id="project-brief"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your target scaling indexes, routing priorities, compliance thresholds..."
                  className="w-full text-xs sm:text-sm border border-slate-200 hover:border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 bg-white focus:outline-none transition-colors font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold text-sm transition-colors shadow-lg shadow-blue-600/15"
              >
                <Send className="mr-2 h-4 w-4" />
                Submit Formal Inquiry
              </button>
            </form>

            {/* Custom toast/AnimatePresence success alert */}
            <AnimatePresence>
              {submittedSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-emerald-50 border border-emerald-150 rounded-2xl p-4 text-slate-900 flex items-start space-x-3.5 relative shadow-sm"
                  id="sales-success-card"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="block text-sm font-bold text-slate-905">Inquiry Recorded Successfully!</span>
                    <span className="block text-xs text-slate-500 leading-relaxed">
                      Thank you. Your request is queued inside our persistent staging logs. A solutions architect will call on your corporate domain shortly.
                    </span>
                  </div>
                  <button 
                    onClick={() => setSubmittedSuccess(false)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 text-xs font-bold px-1.5"
                    title="Dismiss"
                  >
                    ×
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {apiError && (
              <div className="bg-rose-50 border border-rose-150 rounded-2xl p-4 text-slate-905 flex items-start space-x-3 relative shadow-xs">
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-rose-750">Server Action Alert</span>
                  <span className="block text-[11px] text-rose-600 leading-relaxed">
                    {apiError}
                  </span>
                </div>
                <button 
                  onClick={() => setApiError(null)}
                  className="absolute top-2.5 right-3 text-rose-450 hover:text-rose-700 text-xs font-bold px-1"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Office Location Specs & NYC District Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Stylized Offices locations / NYC Map */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg relative" id="manhattan-map-box">
              <div className="h-48 relative bg-slate-50 overflow-hidden border-b border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="EnterpriseCore Manhattan NY Location Office Coordinates Blueprint" 
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual marker pulsing on NYC map */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="absolute inline-flex h-10 w-10 animate-ping rounded-full bg-blue-500 opacity-25"></span>
                  <div className="bg-blue-600 text-white rounded-full p-2 border-2 border-white shadow">
                    <Building2 className="h-4.5 w-4.5" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 font-mono tracking-wide uppercase">
                  Global Coordination Offices
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3.5 pb-3 border-b border-slate-100">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <span className="block font-bold text-slate-900">New York Headquarters (HQ)</span>
                      <span className="text-slate-500 leading-relaxed block mt-0.5">450 Lexington Ave, Midtown Central, New York, NY 10170</span>
                      <span className="text-[10px] text-blue-600 font-bold block mt-1">MAIN DIAL: +1 (212) 555-0190</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <MapPin className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <span className="block font-bold text-slate-900">London Operations Facility</span>
                      <span className="text-slate-500 leading-relaxed block mt-0.5">20 Primrose St, Broadgate Central, London, EC2A 2EW, UK</span>
                      <span className="text-[10px] text-indigo-600 font-bold block mt-1">DIAL: +44 20 7946 0958</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage Logger: view active sandbox submissions */}
            {inquiries.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4" id="inquiry-staging-logs">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="text-xs font-bold text-slate-700 flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-1.5" />
                    Staging Submissions ({inquiries.length})
                  </span>
                  <button
                    onClick={handleClearInquiries}
                    className="text-[10px] font-bold uppercase text-red-505 hover:text-red-700 flex items-center space-x-1 cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Clear All</span>
                  </button>
                </div>

                <div className="max-h-[340px] overflow-y-auto space-y-3 pr-1.5" id="inquiry-history-items">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="bg-white border border-slate-100 p-4 rounded-2xl text-[11px] space-y-2.5 shadow-xs relative group-item hover:border-blue-150 transition-colors">
                      
                      <div className="flex justify-between items-start text-[10px] text-slate-400 gap-2">
                        <div>
                          <span className="font-bold text-slate-800 text-[11px] block">{inq.firstName} {inq.lastName}</span>
                          <span className="text-slate-450 block font-mono text-[9px] mt-0.5">{inq.email} • {inq.companySize}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-[9px] text-slate-400 select-none bg-slate-50 px-2 py-0.5 rounded-full">{inq.timestamp}</span>
                          <button
                            onClick={() => handleDeleteInquiry(inq.id)}
                            className="text-slate-400 hover:text-red-500 transition-colors text-xs font-bold p-1 rounded-md"
                            title="Remove inquiry record"
                          >
                            ×
                          </button>
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed font-sans bg-slate-50/40 p-2.5 rounded-xl border border-slate-50 whitespace-pre-wrap">{inq.message}</p>

                      {/* AI Blueprint Actions */}
                      <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                        {inq.aiAnalysis ? (
                          renderBlueprintMarkdown(inq.aiAnalysis)
                        ) : (
                          <div className="flex justify-between items-center bg-blue-50/30 px-3 py-2 rounded-xl border border-blue-50">
                            <span className="text-[10px] text-blue-700 font-medium">Auto-generate recommendation blueprint:</span>
                            <button
                              onClick={() => handleAnalyzeInquiry(inq.id)}
                              disabled={analyzingIds[inq.id]}
                              className="inline-flex items-center space-x-1 bg-[#3b82f6] hover:bg-blue-600 text-white font-semibold text-[10px] px-2.5 py-1.5 rounded-lg transition-all focus:outline-none disabled:opacity-50 cursor-pointer"
                            >
                              <Sparkles className="h-3 w-3" />
                              <span>{analyzingIds[inq.id] ? "Architecting..." : "Architect Advice"}</span>
                            </button>
                          </div>
                        )}
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
