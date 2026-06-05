import { useState } from "react";
import { motion } from "motion/react";
import { 
  Cpu, 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle, 
  Server, 
  BarChart3, 
  Network, 
  Users, 
  Timer, 
  Briefcase 
} from "lucide-react";

interface ProductsTabProps {
  onContactSales: () => void;
}

export default function ProductsTab({ onContactSales }: ProductsTabProps) {
  const [activeInteractiveFeature, setActiveInteractiveFeature] = useState<number>(0);
  const [chartDataToken, setChartDataToken] = useState<"standard" | "ultra" | "peak">("standard");

  const mockupFeatures = [
    {
      title: "Identity Gateway",
      desc: "Instant OIDC/SAML federated identity matching.",
      coords: { top: "25%", left: "30%" }
    },
    {
      title: "Real-time Orchestrator",
      desc: "Live stream ingestion with adaptive priority routing.",
      coords: { top: "45%", left: "60%" }
    },
    {
      title: "Telemetry Collector",
      desc: "Zero-overhead stats with multi-region backup.",
      coords: { top: "65%", left: "40%" }
    }
  ];

  const graphValues = {
    standard: [30, 45, 35, 60, 40, 70, 65, 85, 75, 90, 85, 95],
    ultra: [45, 60, 55, 75, 70, 90, 85, 110, 100, 115, 110, 125],
    peak: [60, 85, 70, 110, 95, 130, 120, 140, 130, 150, 145, 160],
  };

  const currentGraphData = graphValues[chartDataToken];

  return (
    <div id="products-tab-view" className="space-y-24 py-12">
      {/* 1. Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8" id="products-hero">
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700"
          >
            <Cpu className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
            <span>Next Generation Platform</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Empowering Enterprise <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 bg-clip-text text-transparent">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-slate-500 sm:text-xl"
          >
            A high-performance system engineered to orchestrate secure cloud workloads, streamline cross-border analytics, and maintain uncompromised uptime.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          id="products-hero-ctas"
        >
          <button
            onClick={onContactSales}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Start Pilot Initiative
            <ChevronRight className="ml-1.5 h-5 w-5" />
          </button>
          <a
            href="#bento-tech-specs"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-slate-100 px-8 py-3.5 text-base font-semibold text-slate-800 hover:bg-slate-200 transition-colors"
          >
            Explore Capabilities
          </a>
        </motion.div>

        {/* Laptop/Platform Preview Screen Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative mx-auto max-w-4xl pt-8"
          id="laptop-mockup-section"
        >
          {/* Laptop Base Border */}
          <div className="relative rounded-2xl border-4 border-slate-900 bg-slate-950 p-2.5 shadow-2xl">
            <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-900 text-left relative">
              
              {/* Inner Mockup Image or UI */}
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" 
                alt="Empowering Enterprise Excellence" 
                className="absolute inset-0 h-full w-full object-cover opacity-35"
                referrerPolicy="no-referrer"
              />
              
              {/* Layered Interactive Hotspots */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 text-xs text-white">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="font-mono text-emerald-400">STATUS: LIVE CLUSTER</span>
                  </div>
                  <div className="font-mono text-slate-300">CORE INTEGRATION ACTIVE</div>
                </div>

                <div className="relative z-10 space-y-4 max-w-md bg-slate-950/80 backdrop-blur-md p-5 rounded-lg border border-slate-800 shadow-xl">
                  <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Interactive Specs</span>
                  <h3 className="text-xl font-bold text-white">
                    {mockupFeatures[activeInteractiveFeature].title}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {mockupFeatures[activeInteractiveFeature].desc}
                  </p>
                  
                  {/* Selectors Indicator */}
                  <div className="flex gap-1.5 pt-2">
                    {mockupFeatures.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveInteractiveFeature(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeInteractiveFeature === idx ? "w-8 bg-blue-500" : "w-2 bg-slate-700 hover:bg-slate-500"
                        }`}
                        title={`Select info ${idx + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual hotspot nodes floating on screen */}
              {mockupFeatures.map((node, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveInteractiveFeature(idx)}
                  className="absolute cursor-pointer group flex items-center justify-center"
                  style={{ top: node.coords.top, left: node.coords.left }}
                >
                  <span className="absolute inline-flex h-8 w-8 animate-ping rounded-full bg-blue-400 opacity-20 group-hover:opacity-40"></span>
                  <span className="relative flex h-4.5 w-4.5 rounded-full bg-blue-500 border border-white items-center justify-center text-[10px] font-bold text-white shadow">
                    {idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* Mockup stand */}
          <div className="mx-auto h-3.5 w-[85%] rounded-b-2xl bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-t border-slate-900 shadow-lg"></div>
          <div className="mx-auto h-1.5 w-[30%] rounded-b-xl bg-slate-800 shadow"></div>
        </motion.div>
      </section>

      {/* 2. Logo Strip */}
      <section className="bg-slate-50 py-10 border-y border-slate-100" id="brand-logos">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">
            Trusted by Leaders at Worldwide Frontrunners
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-5 text-center items-center justify-items-center opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="text-lg font-black tracking-tighter text-slate-800">GLOBAL BANK</div>
            <div className="text-lg font-extrabold tracking-tight text-slate-800">TECH CORP</div>
            <div className="text-lg font-bold tracking-widest text-slate-800">LOGISTICS AI</div>
            <div className="text-lg font-black tracking-tight text-slate-800 text-indigo-700">CLOUD NATIVE</div>
            <div className="text-lg font-extrabold tracking-normal text-slate-800">DATA VENTURES</div>
          </div>
        </div>
      </section>

      {/* 3. Bento Grid - Enterprise-Grade Performance */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="bento-tech-specs">
        <div className="mb-12 text-center max-w-2xl mx-auto space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">Architectural Depth</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Enterprise-Grade Performance
          </h2>
          <p className="text-slate-500">
            Four key pillars designed to consolidate operations, audit cybersecurity postures, and deliver analytics at the speed of thought.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1: Infinite Scalability */}
          <div className="lg:col-span-2 sleek-card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-slate-50/60 pointer-events-none group-hover:scale-110 transition-transform duration-300">
              <Server className="h-44 w-44 text-slate-50" />
            </div>
            <div className="space-y-4 max-w-md relative z-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-[#3b82f6]">
                <Server className="h-6 w-6" id="srv-icon-1" />
              </div>
              <h3 className="text-2xl font-bold text-slate-950">Infinite Scalability</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Horizontal container scheduling with instantaneous global synchronization. Maintain sub-millisecond route resolution even under dynamic high-volume traffic bursts.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-2xl font-extrabold text-[#3b82f6]">99.999%</div>
                  <div className="text-xs font-semibold text-slate-400 uppercase">Guaranteed Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#3b82f6]">&lt; 14ms</div>
                  <div className="text-xs font-semibold text-slate-400 uppercase">Global Edge Latency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Zero-Trust Security */}
          <div className="rounded-2xl border border-slate-950 bg-slate-950 p-8 flex flex-col justify-between text-white shadow-xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white">
                <ShieldCheck className="h-6 w-6" id="scrty-icon" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Zero-Trust Security</h3>
                <p className="text-xs text-slate-400">
                  Strict cryptographic authorization and request containment standard on all transactions.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 font-mono" id="sec-checklist">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>AES 256-bit Key Isolation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Context-Aware Attribute Access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Continuous Threat Emulation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>SIEM Automated Handshakes</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-white/10 text-[10px] text-slate-400 tracking-wide font-mono mt-4">
              SECURE INTEGRATION ACTIVE -- REV: 4B
            </div>
          </div>

          {/* Card 3: Advanced Analytics */}
          <div className="sleek-card p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <BarChart3 className="h-6 w-6" id="anltcs-icon" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Advanced Analytics</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Analyze operations dynamically. Transition from high-level statistics down to targeted transactional tracing instantly.
              </p>

              {/* Dynamic Interactive Mini Plot */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-700">Cluster Throughput</span>
                  <div className="flex space-x-1.5" id="metric-selectors">
                    {(["standard", "ultra", "peak"] as const).map((tk) => (
                      <button
                        key={tk}
                        onClick={() => setChartDataToken(tk)}
                        className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-bold transition-all ${
                          chartDataToken === tk
                            ? "bg-slate-900 text-white"
                            : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                        }`}
                      >
                        {tk}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SVG Graph rendering dynamic state data */}
                <div className="h-28 w-full flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 240 80">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="20" x2="240" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="0" y1="50" x2="240" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                    
                    {/* Gradient Area under the path */}
                    <path
                      d={`M 0,80 L ${currentGraphData.map((val, idx) => `${idx * 21.8}, ${80 - val * 0.45}`).join(" L ")} L 240,80 Z`}
                      fill="url(#chartGradient)"
                    />
                    
                    {/* Line Path */}
                    <path
                      d={`M 0,${80 - currentGraphData[0] * 0.45} L ${currentGraphData
                        .map((val, idx) => `${idx * 21.8}, ${80 - val * 0.45}`)
                        .join(" L ")}`}
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Glowing endpoint */}
                    <circle
                      cx="240"
                      cy={80 - currentGraphData[currentGraphData.length - 1] * 0.45}
                      r="4"
                      fill="#3b82f6"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Unified Control Plane */}
          <div className="lg:col-span-2 sleek-card p-8 flex flex-col lg:flex-row gap-8 justify-between">
            <div className="space-y-4 max-w-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                  <Network className="h-6 w-6" id="ctplane-icon" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">Unified Control Plane</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Manage across on-premise arrays and public multi-cloud architectures. Unified monitoring allows quick resolution from a centralized interface.
                </p>
              </div>

              <div className="flex space-x-3 items-center text-xs text-blue-600 font-semibold cursor-pointer group" onClick={onContactSales}>
                <span>Request Custom Integration Architecture</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Inset meeting room graphic simulation layout */}
            <div className="rounded-xl overflow-hidden relative border border-slate-100 flex-1 max-h-[220px]">
              <img 
                src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80" 
                alt="Unified Control Plane Collaboration" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent p-4 flex items-end">
                <div className="flex items-center space-x-3 text-white text-xs bg-slate-950/80 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span className="font-mono">15 Managed Clusters Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Phases Integration Flowchart */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden" id="integration-phases">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Streamlined Process</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Seamless Integration in Three Phases
            </h2>
            <p className="text-slate-400">
              Our proven enterprise onboarding pipeline minimizes commercial disruption while delivering modern systems velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl relative shadow-lg">
              <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-mono font-bold shadow-md shadow-blue-600/30">
                01
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-blue-400" />
                  <h3 className="text-lg font-bold text-white">Architecture Assessment</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We verify your current database footprint, routing pathways, security thresholds, and dependencies to outline a safe migration directory.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl relative shadow-lg">
              <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white font-mono font-bold shadow-md shadow-indigo-600/30">
                02
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <Timer className="h-5 w-5 text-indigo-400" />
                  <h3 className="text-lg font-bold text-white">Pilot Deployment</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We spin up a target secure cluster proxying partial production requests under strict monitoring thresholds to validate live system performance.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl relative shadow-lg">
              <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white font-mono font-bold shadow-md shadow-emerald-400/30">
                03
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">Global Rollout</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We safely shift global active nodes to the core cluster, empowering telemetry logs, dynamic scaling automation, and 24/7 technical security safeguards.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Callback Consultation CTA Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="quick-callback">
        <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-10 items-center shadow-2xl relative overflow-hidden">
          {/* Subtle graphic accent */}
          <div className="absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-blue-500 opacity-20 filter blur-3xl"></div>
          <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-indigo-500 opacity-20 filter blur-2xl"></div>

          <div className="space-y-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-150 bg-blue-500 px-3 py-1 rounded-full">
              Enterprise Consultation
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to scaling your ecosystem?
            </h2>
            <p className="text-blue-100 text-base leading-relaxed">
              Schedule a technical consulting call with an EnterpriseCore Solutions Architect. We will design a custom transition diagram mapped exactly with your legacy configuration priorities.
            </p>
          </div>

          <div className="bg-white text-slate-950 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4 relative z-10" id="instant-request-form">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              Request Assessment Blueprint
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="assessment-name" className="block text-xs font-semibold text-slate-500 mb-1">Company Name</label>
                <input
                  id="assessment-name"
                  type="text"
                  placeholder="Acme Enterprise"
                  className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="assessment-email" className="block text-xs font-semibold text-slate-500 mb-1">Corporate Email</label>
                <input
                  id="assessment-email"
                  type="email"
                  placeholder="director@acme.com"
                  className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={onContactSales}
              className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold text-sm transition-colors shadow-md hover:shadow-lg"
            >
              Request Custom Blueprint
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
            <p className="text-[10px] text-slate-400 text-center">
              Our assessment process requires an active corporate domains check.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
