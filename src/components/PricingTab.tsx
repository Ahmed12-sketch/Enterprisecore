import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  PhoneCall, 
  ArrowRight,
  ShieldAlert,
  Sparkles,
  ToggleLeft
} from "lucide-react";
import { PricingPlan, FAQItem } from "../types";

interface PricingTabProps {
  onContactSales: () => void;
}

export default function PricingTab({ onContactSales }: PricingTabProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually");
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const plans: PricingPlan[] = [
    {
      name: "Starter Bundle",
      priceMonthly: 49,
      priceAnnually: 39,
      description: "For rapid prototype validation and small independent infrastructure arrays.",
      features: [
        "Up to 3 staging cloud clusters",
        "Continuous SOC2 compliance audit checks",
        "Sub-second horizontal scaling queue monitor",
        "Managed database cluster replication (2 targets)",
        "Standard SMTP outbound ticket log alerts",
        "Static 45ms average routing latency SLA"
      ],
      cta: "Acquire Starter Tier"
    },
    {
      name: "Professional Plan",
      priceMonthly: 129,
      priceAnnually: 103, // 20% off
      description: "Our core enterprise performance standard for full active workloads.",
      features: [
        "Up to 15 concurrent production clusters",
        "AI-Driven self-healing load-balancer access",
        "Airtight AES-256 ephemeral encryption wrap",
        "Dynamic multi-region SQL backup routing",
        "High-performance Edge Node replication (<15ms)",
        "24/7 technical hotline direct Slack fallback",
        "Full OpenTelemetry logs tracing parsing portal"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Custom Enterprise",
      priceMonthly: 999, // Customized / Contact
      priceAnnually: 799,
      description: "Uncapped resources, managed global deployments, and dedicated infrastructure specialists.",
      features: [
        "Unlimited isolated cloud cluster nodes SLA",
        "Custom hybrid server on-premise handshake",
        "Airtight biometric IAM directory isolation",
        "Dedicated Enterprise CTO consulting team",
        "Contractual 99.999% network uptime guarantee",
        "Custom localized caching node creation maps"
      ],
      cta: "Request Sales Quote"
    }
  ];

  const comparisonSpecs = [
    { feature: "Managed Clusters Limit", starter: "3", pro: "15", enterprise: "Unlimited" },
    { feature: "Average Network Uptime Guarantee", starter: "99.9%", pro: "99.99%", enterprise: "99.999% SLA" },
    { feature: "AI-Driven Predictive Tracing", starter: "Not Included", pro: "Fully Active", enterprise: "Full + Dedicated Specialists" },
    { feature: "SOC2 Compliance Tracking", starter: "Checked Daily", pro: "Real-time Stream", enterprise: "Continuous Active Handshake" },
    { feature: "Ephemeral DB Encryption Wrapping", starter: "Not Included", pro: "Yes, Automated", enterprise: "Yes, Dedicated HSM Isolated" },
    { feature: "Dedicated Slack Solutions Architect", starter: "Not Included", pro: "Self-Service", enterprise: "Unlimited (2 Hour Response)" },
  ];

  const faqs: FAQItem[] = [
    {
      question: "Are we bound to lock-in contracts on the annual term?",
      answer: "No. All plans, including annually billed tiers, let you scale down your cluster node commitments or transition to custom hybrid frameworks easily. If you terminate mid-term, you retain stage credits for future allocations."
    },
    {
      question: "How long does the Architecture Assessment pilot take?",
      answer: "Standard cloud assessments finish within 48 to 72 hours. Our solutions architects inspect current database connections, network gateways, and route payloads safely before suggesting your blueprint."
    },
    {
      question: "Does EnterpriseCore support custom on-premise bare-metal arrays?",
      answer: "Yes, our Custom Enterprise system provides specialized SAML/OIDC identity matching and gRPC load Balancer scripts specifically modeled for local server structures."
    },
    {
      question: "Is there any overhead penalty on the Zero-Trust security layer?",
      answer: "None. Our cryptographic AES-256 encryption uses hardware-routed system wrappers, resulting in sub-millisecond encryption and decryption overhead rates."
    },
    {
      question: "Can we configure dynamic SIEM systems under the Pro category?",
      answer: "Yes, the Pro tier exposes type-safe open-ended syslog endpoints specifically structured to pipe transaction telemetry directly into your Splunk, Datadog, or custom SIEM portal."
    }
  ];

  return (
    <div id="pricing-tab-view" className="space-y-24 py-12">
      
      {/* 1. Header & Billing Toggle */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6" id="pricing-header">
        <div className="space-y-4">
          <span className="inline-flex items-center space-x-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
            <span>Optimal Framework Budgets</span>
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            Flexible Plans Mapped <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 bg-clip-text text-transparent">
              to Your Operational Scale
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-slate-500 text-sm sm:text-base leading-relaxed">
            Acquire guaranteed network uptime and AI self-healing cluster layers without legacy pricing overheads. Pay for your precise node commits.
          </p>
        </div>

        {/* Dynamic sliding billing toggle */}
        <div className="flex items-center justify-center space-x-4 pt-4" id="billing-period-toggle">
          <span className={`text-sm font-semibold transition-colors ${billingPeriod === "monthly" ? "text-slate-900" : "text-slate-450"}`}>
            Billed Monthly
          </span>
          
          <button
            onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annually" : "monthly")}
            className="relative h-6 w-11 rounded-full bg-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            id="toggle-billing-btn"
          >
            <span
              className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform ${
                billingPeriod === "annually" ? "translate-x-5 bg-blue-600" : ""
              }`}
            />
          </button>

          <span className={`text-sm font-semibold flex items-center space-x-1.5 transition-colors ${billingPeriod === "annually" ? "text-slate-900" : "text-slate-450"}`}>
            <span>Billed Annually</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-850 px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
              Save 20%
            </span>
          </span>
        </div>
      </section>

      {/* 2. Interactive Pricing Plan Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="pricing-plans-grid">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {plans.map((plan, idx) => {
            const isEnterprise = plan.name.includes("Enterprise");
            const price = billingPeriod === "monthly" ? plan.priceMonthly : plan.priceAnnually;
            
            return (
              <div
                key={idx}
                id={`plan-card-${idx}`}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.popular 
                    ? "bg-indigo-950 text-white shadow-2xl border-2 border-[#3b82f6] scale-100 lg:scale-[1.03] z-10" 
                    : "sleek-card p-8 text-slate-850"
                }`}
              >
                {/* Popular Bagde */}
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-[10px] font-black uppercase tracking-widest text-white px-3.5 py-1.5 rounded-full shadow-md">
                    Most Popular Choice
                  </span>
                )}

                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold tracking-tight">{plan.name}</h3>
                    <p className={`text-xs ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Dynamic Pricing figures */}
                  <div className="flex items-baseline py-4 border-y border-slate-100/10" id={`price-box-${idx}`}>
                    {isEnterprise ? (
                      <div className="space-y-1">
                        <span className="text-3xl font-black tracking-tight">Custom SLA</span>
                        <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400">
                          Tailored Framework Agreement
                        </span>
                      </div>
                    ) : (
                      <>
                        <span className="text-5xl font-black tracking-tighter">
                          ${price}
                        </span>
                        <span className={`text-sm font-semibold ml-2 ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                          / active cluster / mo
                        </span>
                      </>
                    )}
                  </div>

                  {/* Value-added feature lists */}
                  <ul className="space-y-3 pt-2" id={`features-list-${idx}`}>
                    {plan.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start text-xs leading-relaxed">
                        <Check className="h-4 w-4 text-emerald-500 mr-2.5 shrink-0 mt-0.5" />
                        <span className={plan.popular ? "text-slate-300" : "text-slate-650"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={isEnterprise ? onContactSales : () => alert(`Excellent choice! Directing cluster provisioning portal for your target standard config...`)}
                    className={`w-full inline-flex items-center justify-center rounded-2xl py-3.5 text-xs font-bold transition-all uppercase tracking-wider ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20"
                        : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    {isEnterprise ? "Assessments executed under NDA." : "Setup sandbox arrays in just 3 minutes."}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 3. Deep Feature Comparison Matrix */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10" id="pricing-matrix">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">Metric Breakdown</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl animate-fade">
            Compare Available Elements
          </h2>
          <p className="text-slate-500 text-xs">
            Review detailed capabilities across each B2B tier configuration.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse" id="matrix-table">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200/80 text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                <th className="p-5">System Capability</th>
                <th className="p-5">Starter Tier</th>
                <th className="p-5 text-indigo-700 bg-indigo-50/20">Pro Standard</th>
                <th className="p-5">Enterprise Core</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {comparisonSpecs.map((spec, sidx) => (
                <tr key={sidx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-5 font-bold text-slate-900">{spec.feature}</td>
                  <td className="p-5 text-slate-550 font-mono">{spec.starter}</td>
                  <td className="p-5 text-indigo-805 font-semibold font-mono bg-indigo-50/10">{spec.pro}</td>
                  <td className="p-5 text-slate-900 font-mono font-bold bg-blue-50/5">{spec.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Frequently Asked Questions Accordion */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10" id="pricing-faqs">
        <div className="text-center space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">Resolving Uncertainties</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm">
            Everything you need to verify regarding nodes, setups, compliance structures, and SLA billing parameters.
          </p>
        </div>

        <div className="space-y-4" id="faq-accordion-group">
          {faqs.map((faq, fidx) => {
            const isOpen = openFAQIndex === fidx;
            
            return (
              <div
                key={fidx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQIndex(isOpen ? null : fidx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-slate-900 focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center space-x-2.5">
                    <HelpCircle className="h-4.5 w-4.5 text-blue-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-100 bg-slate-50/30"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Callback CTA Banner */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" id="pricing-callback-card">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
            <Building2 className="h-56 w-56" />
          </div>

          <div className="space-y-3 relative z-10 max-w-md">
            <h3 className="text-2xl font-black text-white tracking-tight">Need custom security agreements?</h3>
            <p className="text-xs text-indigo-100 leading-relaxed">
              Our engineering team drafts custom system architectures linking active on-premise components safely to public nodes under strict compliance constraints.
            </p>
          </div>

          <button
            onClick={onContactSales}
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-4 transition-transform active:scale-95 shadow-md relative z-10"
          >
            <PhoneCall className="mr-2 h-4 w-4" />
            Connect with Sales Desk
          </button>
        </div>
      </section>

    </div>
  );
}
