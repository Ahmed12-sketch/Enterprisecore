import { TabType } from "../types";
import { Shield, Mail, Phone, ExternalLink } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const links = {
    platform: [
      { label: "Deployment Engine", tab: "products" as TabType },
      { label: "Predictive Telemetry", tab: "products" as TabType },
      { label: "Access Security", tab: "solutions" as TabType },
      { label: "Edge Priority route", tab: "solutions" as TabType },
    ],
    company: [
      { label: "Vision & Mission", tab: "about" as TabType },
      { label: "Our Core Team", tab: "about" as TabType },
      { label: "Pricing Structures", tab: "pricing" as TabType },
      { label: "Contact Sales desk", tab: "about" as TabType },
    ],
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16" id="app-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo & Brand Details */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow shadow-blue-600/30">
                <Shield className="h-4.5 w-4.5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Enterprise<span className="text-blue-500">Core</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Next-generation high-availability server systems structured specifically to sustain dynamic workloads, audit transaction endpoints, and deliver low-latency telemetry.
            </p>
            <div className="flex space-x-3 text-[10px] text-slate-500 font-mono">
              <span className="bg-slate-800/80 px-2 py-1 rounded">SOC2 Type II Audit</span>
              <span className="bg-slate-800/80 px-2 py-1 rounded">ISO 27001 Gateway</span>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-200 tracking-wide uppercase font-mono">
              The Platform
            </h4>
            <ul className="space-y-2.5 text-xs">
              {links.platform.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setActiveTab(item.tab)}
                    className="hover:text-white hover:underline transition-all text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-200 tracking-wide uppercase font-mono">
              Organization
            </h4>
            <ul className="space-y-2.5 text-xs">
              {links.company.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setActiveTab(item.tab)}
                    className="hover:text-white hover:underline transition-all text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-600 space-y-4 sm:space-y-0 uppercase font-mono">
          <div>
            <span>© {new Date().getFullYear()} EnterpriseCore Corp. All operations audited under NSA guidelines.</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400">Security Disclosures</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">SLA Contracts</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Admin Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
