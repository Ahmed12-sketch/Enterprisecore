import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Network, 
  Layers, 
  Activity, 
  Terminal, 
  CheckCircle, 
  Database, 
  ArrowRight, 
  Lock, 
  Eye, 
  Fingerprint, 
  FileText, 
  Calendar,
  Sparkles,
  RefreshCw
} from "lucide-react";

interface SolutionsTabProps {
  onContactSales: () => void;
}

export default function SolutionsTab({ onContactSales }: SolutionsTabProps) {
  const [activeSegment, setActiveSegment] = useState<"hybrid" | "edge" | "ops" | "api">("hybrid");
  const [showDownloadAlert, setShowDownloadAlert] = useState(false);
  const [liveUptime, setLiveUptime] = useState(99.9991);

  // Simulate slowly ticking live uptime
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveUptime((prev) => {
        const delta = (Math.random() - 0.48) * 0.0003;
        const nextVal = prev + delta;
        return nextVal > 99.9999 ? 99.9999 : nextVal < 99.9985 ? 99.9985 : parseFloat(nextVal.toFixed(4));
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const infraDetails = {
    hybrid: {
      title: "Hybrid Scaling",
      desc: "Synchronize bare-metal nodes with on-demand multi-cloud buckets seamlessly without routing resets.",
      stat: "420k Trans/sec"
    },
    edge: {
      title: "Edge Priority",
      desc: "Deploy localized transaction caches directly within regional exchanges, routing around global bottlenecks.",
      stat: "11.2ms Avg rtt"
    },
    ops: {
      title: "Managed Ops",
      desc: "Comprehensive orchestration handled entirely by automated state controllers with 24/7 expert fallback.",
      stat: "Zero Dev Effort"
    },
    api: {
      title: "Dev API",
      desc: "Strict type-safe OpenAPI schemas generated dynamically from active runtime clusters with full SDK scaffolding.",
      stat: "3 Sec Sandbox Setup"
    }
  };

  const currentDetail = infraDetails[activeSegment];

  const handleDownloadBrief = () => {
    setShowDownloadAlert(true);
    setTimeout(() => setShowDownloadAlert(false), 4000);
  };

  return (
    <div id="solutions-tab-view" className="space-y-24 py-12">
      
      {/* 1. Header Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6" id="solutions-header">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700"
        >
          <Activity className="h-4.5 w-4.5 text-indigo-600 animate-pulse" />
          <span>B2B Global Solutions</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl md:text-6xl"
        >
          Architecting the Future <br />
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent">of Enterprise Operations</span>
        </motion.h1>
        
        {/* Core Live Stats Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-xl bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex items-center justify-around shadow-sm"
          id="uptime-indicator-bar"
        >
          <div className="flex items-center space-x-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Live Infrastructure Status</span>
          </div>
          <div className="h-8 w-px bg-slate-200"></div>
          <div>
            <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">{liveUptime}%</span>
            <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold">Network Uptime</span>
          </div>
        </motion.div>
      </section>

      {/* 2. Cloud Infrastructure Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="solutions-cloud-infra">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          
          {/* Left Column: Interactive 4-Grid Component Panel */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Dynamic Workloads</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                Cloud Infrastructure
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                We orchestrate high-availability server networks, ensuring that database connections and microservice routes dynamically balance around transient regional demands.
              </p>
            </div>

            {/* The 4-grid selectors as requested */}
            <div className="grid grid-cols-2 gap-4" id="infra-segment-selectors">
              {(["hybrid", "edge", "ops", "api"] as const).map((seg) => {
                const isActive = activeSegment === seg;
                const iconsMap = {
                  hybrid: Layers,
                  edge: Network,
                  ops: RefreshCw,
                  api: Terminal
                };
                const IconComp = iconsMap[seg];
                
                return (
                  <button
                    key={seg}
                    onClick={() => setActiveSegment(seg)}
                    className={`p-5 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? "bg-[#f1f5f9] border-[#3b82f6]/50 text-[#3b82f6] font-semibold shadow-md" 
                        : "bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <IconComp className={`h-6 w-6 mb-3 ${isActive ? "text-[#3b82f6]" : "text-slate-400"}`} />
                    <div className="font-bold text-sm">{infraDetails[seg].title}</div>
                    <div className="text-[10px] mt-1 text-slate-400 font-mono">ACTIVE MODULE</div>
                  </button>
                );
              })}
            </div>

            {/* Selected segment explainer highlight card */}
            <motion.div 
              key={activeSegment}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 space-y-2"
              id="selected-infra-explainer"
            >
              <h4 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                <span>Core Feature: {currentDetail.title}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentDetail.desc}
              </p>
              <div className="pt-2 flex justify-between items-center border-t border-blue-100/50">
                <span className="text-[10px] text-slate-400 uppercase font-mono tracking-widest">Active Benchmark</span>
                <span className="text-xs font-black text-blue-700 font-mono">{currentDetail.stat}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Checklists & CTO Quote Box */}
          <div className="space-y-10 lg:pl-8">
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-slate-900">Proven Operational Benchmarks</h3>
              
              <ul className="space-y-4" id="solutions-checklists">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <span className="block text-sm font-bold text-slate-900">Elastic core deployment</span>
                    <span className="block text-xs text-slate-500">Auto-scaling clusters optimize footprint based on sub-second server queue monitoring.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <span className="block text-sm font-bold text-slate-900">Encrypted data transfer</span>
                    <span className="block text-xs text-slate-500">Continuous in-transit encryptions with automated ephemeral key replacement safeguards.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <span className="block text-sm font-bold text-slate-900">Global edge nodes latency under 15ms</span>
                    <span className="block text-xs text-slate-500">Localized point-of-presence endpoints serve high-frequency read caches instantly.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <span className="block text-sm font-bold text-slate-900">Isolated virtual networks</span>
                    <span className="block text-xs text-slate-500">Separated subnets map with specific access thresholds for airtight department sandboxes.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTO Client Quote Box */}
            <div className="bg-slate-50 border-l-4 border-indigo-500 rounded-r-2xl p-6 space-y-4 shadow-sm" id="client-quote-block">
              <p className="text-sm italic text-slate-700 leading-relaxed">
                &ldquo;EnterpriseCore solved our scalability bottleneck in 72 hours. Outstanding performance and proactive security alerts have rewritten how we deploy cloud targets.&rdquo;
              </p>
              <div className="flex items-center space-x-3 border-t border-slate-200/60 pt-3">
                <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600 uppercase">
                  TC
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">Executive VP of Tech</span>
                  <span className="block text-[10px] text-slate-500">TechCorp Global Infrastructure Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI-Driven Insights Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="solutions-ai-insights">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          
          {/* Left Column: Descriptions */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                <span>Automated Co-pilot</span>
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                AI-Driven Insights
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Anticipate disruptions before they bottleneck workflows. Our predictive neural networks run continuous telemetry analytics to secure performance speeds.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-base font-bold text-slate-950 flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                  <span>Predictive Forecasting</span>
                </h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Anticipate server storage peaks, query spikes, cyber security anomalies, and performance metrics over 30 days ahead with 98.7% validation success.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-blue-500 opacity-20 filter blur-2xl"></div>
                <h4 className="text-base font-bold text-white flex items-center space-x-2 relative z-10">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span>Automated Intelligence</span>
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed relative z-10">
                  Self-healing cluster routers mitigate memory anomalies and rebalance database request routes instantly without dev team oversight.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={onContactSales}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group"
              >
                <span>Explore Enterprise Case Studies</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Dashboard Glass Mockup */}
          <div className="relative group" id="ai-dashboard-glass-mockup">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-10 filter blur-xl group-hover:opacity-15 transition-opacity"></div>
            
            <div className="relative rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xl overflow-hidden">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md uppercase font-bold">
                  AI PREDICTION INSTANCE
                </span>
              </div>

              {/* Glass Interface Mockup Image */}
              <div className="rounded-xl overflow-hidden border border-slate-100 relative h-64 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80" 
                  alt="AI Analytical Insights Mockup" 
                  className="w-full h-full object-cover grayscale opacity-85 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40 p-4 flex flex-col justify-between">
                  <span className="text-white bg-blue-600 text-[10px] font-bold px-2 py-1 rounded w-fit uppercase font-mono tracking-wider shadow">
                    FORECAST OVERVIEW: CO-EFFICIENT 0.94
                  </span>
                  
                  {/* Floating Analytical Metric block */}
                  <div className="bg-slate-900/90 backdrop-blur border border-white/10 p-3 rounded-lg text-white space-y-2 max-w-[210px] shadow-lg">
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold font-mono">NODE HEALTH</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-lg font-bold font-mono">99.98%</span>
                      <span className="text-[10px] text-emerald-400 font-bold font-mono">+1.2%</span>
                    </div>
                    <div className="text-[9px] text-slate-300">Anomalies intercepted: <span className="text-emerald-300 font-bold font-mono">14</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cyber Security Excellence Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12" id="solutions-security">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">Airtight Safety</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Cyber Security Excellence
          </h2>
          <p className="text-slate-500">
            A defense mechanism structured to align safely with zero-trust directories, ensuring unbreachable system pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="sleek-card p-8 hover:-translate-y-1 space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#3b82f6] shadow-sm border border-blue-100">
              <Lock className="h-6 w-6" id="lock-icon" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">End-to-End Encryption</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Standard hardware-isolated AES-256 wrapping applied safely on global data blocks in storage, transit, and runtime query parsing.
            </p>
          </div>

          {/* Card 2 */}
          <div className="sleek-card p-8 hover:-translate-y-1 space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100">
              <Eye className="h-6 w-6" id="eye-icon" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">Threat Monitoring</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Continuous network trace inspection linked to dynamic SIEM databases, auto-mitigating credential attacks instantly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="sleek-card p-8 hover:-translate-y-1 space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 shadow-sm border border-teal-100">
              <Fingerprint className="h-6 w-6" id="fingerprint-icon" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">Identity Access</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Federated security standard ensuring context-aware physical multi-factor validations across team directory structures.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Scale Enterprise Call-To-Action with Brief Download */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="scale-cta">
        <div className="bg-slate-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center space-y-8 relative overflow-hidden" id="cta-card">
          <div className="absolute top-0 left-0 p-8 text-white/5 pointer-events-none">
            <Network className="h-72 w-72" />
          </div>
          
          <div className="space-y-4 max-w-xl mx-auto relative z-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 font-mono">
              GET COMMITTED
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to Scale Your Enterprise?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Join thousands of cross-border operations powered by EnterpriseCore. Schedule your consulting slot or analyze the architecture brief.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10" id="solutions-cta-buttons">
            <button
              onClick={onContactSales}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 shadow-md shadow-blue-600/10 active:scale-95 transition-all"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Architectural Audit
            </button>
            <button
              id="solutions-brief-download"
              onClick={handleDownloadBrief}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3.5 transition-all active:scale-95"
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Solutions Brief
            </button>
          </div>

          {/* Alert trigger */}
          {showDownloadAlert && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="mx-auto max-w-sm bg-blue-900/90 border border-blue-700/80 p-3 rounded-lg text-white flex items-center space-x-2 text-xs font-semibold relative z-10"
              id="brief-download-success"
            >
              <CheckCircle className="h-4.5 w-4.5 text-emerald-400 animate-bounce shrink-0" />
              <span>Success! Solutions Brief pdf queued for download.</span>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  );
}
