import { useState } from 'react';

const MONTHLY = { starter: 49, professional: 129 };
const ANNUAL = { starter: 39, professional: 103 };

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <span
      className={`material-symbols-outlined ${dark ? 'text-secondary-fixed' : 'text-secondary'}`}
      style={{ fontSize: 20 }}
    >
      check_circle
    </span>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-outline-variant rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-lg text-left bg-surface-container-lowest flex justify-between items-center hover:bg-surface-container-low transition-colors"
      >
        <span className="text-headline-sm">{question}</span>
        <span className="material-symbols-outlined text-outline">{open ? 'remove' : 'add'}</span>
      </button>
      {open && (
        <div className="p-lg bg-surface-container-lowest border-t border-outline-variant text-body-md text-on-surface-variant">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const prices = annual ? ANNUAL : MONTHLY;

  return (
    <main className="max-w-max-width mx-auto px-margin-desktop py-xl">
      {/* Hero */}
      <section className="text-center mb-xl">
        <h1 className="text-display font-bold mb-sm">Scalable solutions for every team.</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Transparent pricing built for enterprise reliability. Start small, scale indefinitely.
        </p>
        <div className="mt-lg flex justify-center items-center gap-md">
          <span className="text-label-md">Billed Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${annual ? 'bg-secondary' : 'bg-outline-variant'}`}
          >
            <span
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${annual ? 'translate-x-6' : ''}`}
            ></span>
          </button>
          <span className="text-label-md">
            Billed Annually <span className="text-secondary font-bold">(Save 20%)</span>
          </span>
        </div>
      </section>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl items-start">
        {/* Starter */}
        <div className="bg-surface-container-lowest border border-outline-variant p-xl rounded-xl flex flex-col hover:border-primary transition-all duration-300">
          <div className="mb-lg">
            <h2 className="text-headline-sm text-primary mb-xs">Starter</h2>
            <p className="text-body-sm text-on-surface-variant">Perfect for individuals and small startups.</p>
          </div>
          <div className="mb-lg">
            <span className="text-display font-bold">${prices.starter}</span>
            <span className="text-body-md text-on-surface-variant">/mo</span>
          </div>
          <ul className="space-y-md mb-xl flex-grow">
            {['Up to 5 team members', 'Basic analytics dashboard', '10GB shared storage', 'Email support'].map(f => (
              <li key={f} className="flex items-center gap-sm">
                <CheckIcon /> <span className="text-body-md">{f}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-md px-xl bg-surface-container-high text-primary text-label-md font-medium rounded-lg hover:bg-surface-container-highest transition-colors">
            Get Started
          </button>
        </div>

        {/* Professional */}
        <div className="bg-primary text-on-primary border border-primary p-xl rounded-xl flex flex-col md:-translate-y-4 shadow-xl ring-4 ring-secondary-container/20">
          <div className="mb-lg flex justify-between items-start">
            <div>
              <h2 className="text-headline-sm text-white mb-xs">Professional</h2>
              <p className="text-body-sm text-primary-fixed-dim">Ideal for growing teams and agencies.</p>
            </div>
            <span className="bg-secondary-container text-on-secondary-container px-sm py-xs text-label-sm font-bold rounded uppercase">Most Popular</span>
          </div>
          <div className="mb-lg">
            <span className="text-display font-bold text-white">${prices.professional}</span>
            <span className="text-body-md text-primary-fixed-dim">/mo</span>
          </div>
          <ul className="space-y-md mb-xl flex-grow">
            {['Unlimited team members', 'Advanced reporting suite', '100GB shared storage', 'Priority chat support', 'Custom integrations'].map(f => (
              <li key={f} className="flex items-center gap-sm">
                <CheckIcon dark /> <span className="text-body-md">{f}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-md px-xl bg-secondary-container text-on-secondary-container text-label-md font-medium rounded-lg hover:brightness-110 transition-all active:scale-95">
            Get Started
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-surface-container-lowest border border-outline-variant p-xl rounded-xl flex flex-col hover:border-primary transition-all duration-300">
          <div className="mb-lg">
            <h2 className="text-headline-sm text-primary mb-xs">Enterprise</h2>
            <p className="text-body-sm text-on-surface-variant">Bespoke solutions for global corporations.</p>
          </div>
          <div className="mb-lg">
            <span className="text-headline-lg font-bold">Custom</span>
          </div>
          <ul className="space-y-md mb-xl flex-grow">
            {['Enterprise-grade security', 'Unlimited storage capacity', 'Dedicated account manager', 'On-premise deployment', 'Custom SLA agreements'].map(f => (
              <li key={f} className="flex items-center gap-sm">
                <CheckIcon /> <span className="text-body-md">{f}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-md px-xl border border-primary text-primary text-label-md font-medium rounded-lg hover:bg-primary hover:text-on-primary transition-colors">
            Contact Sales
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <section className="mt-xl">
        <h2 className="text-headline-lg text-center mb-xl">Compare all features</h2>
        <div className="overflow-x-auto bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="p-lg text-headline-sm text-primary w-1/3">Features</th>
                <th className="p-lg text-label-md text-on-surface-variant text-center">Starter</th>
                <th className="p-lg text-label-md text-primary text-center">Professional</th>
                <th className="p-lg text-label-md text-on-surface-variant text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              <tr className="bg-surface-container-high/50">
                <td className="px-lg py-sm text-label-sm text-on-surface-variant uppercase tracking-wider" colSpan={4}>Core Capabilities</td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="p-lg text-body-md">User Accounts</td>
                <td className="p-lg text-center text-body-md">5</td>
                <td className="p-lg text-center text-body-md font-bold text-secondary">Unlimited</td>
                <td className="p-lg text-center text-body-md">Unlimited</td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="p-lg text-body-md">Active Projects</td>
                <td className="p-lg text-center text-body-md">10</td>
                <td className="p-lg text-center text-body-md">Unlimited</td>
                <td className="p-lg text-center text-body-md">Unlimited</td>
              </tr>
              <tr className="bg-surface-container-high/50">
                <td className="px-lg py-sm text-label-sm text-on-surface-variant uppercase tracking-wider" colSpan={4}>Advanced Analytics</td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="p-lg text-body-md">Real-time Dashboard</td>
                <td className="p-lg text-center"><span className="material-symbols-outlined text-outline-variant">remove</span></td>
                <td className="p-lg text-center"><span className="material-symbols-outlined text-secondary">check_circle</span></td>
                <td className="p-lg text-center"><span className="material-symbols-outlined text-secondary">check_circle</span></td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="p-lg text-body-md">Predictive Modeling</td>
                <td className="p-lg text-center"><span className="material-symbols-outlined text-outline-variant">remove</span></td>
                <td className="p-lg text-center"><span className="material-symbols-outlined text-outline-variant">remove</span></td>
                <td className="p-lg text-center"><span className="material-symbols-outlined text-secondary">check_circle</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-xl max-w-3xl mx-auto">
        <h2 className="text-headline-lg text-center mb-xl">Frequently Asked Questions</h2>
        <div className="space-y-md">
          <FAQItem
            question="Can I switch plans later?"
            answer="Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
          />
          <FAQItem
            question="Is there a discount for non-profits?"
            answer="We offer a 50% discount for registered 501(c)(3) organizations and educational institutions. Please contact our sales team for verification."
          />
          <FAQItem
            question="What security compliance do you offer?"
            answer="EnterpriseCore is SOC2 Type II, GDPR, and HIPAA compliant. We provide complete transparency through our security portal."
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mt-xl relative overflow-hidden rounded-xl bg-primary-container p-xl flex flex-col md:flex-row items-center gap-xl">
        <div className="z-10 md:w-1/2">
          <h3 className="text-headline-lg text-white mb-md">Need something more specific?</h3>
          <p className="text-body-lg text-primary-fixed-dim mb-lg">Our engineering team can build custom integrations and workflows tailored specifically to your enterprise architecture.</p>
          <button className="bg-white text-primary px-lg py-md rounded text-label-md font-medium hover:bg-outline-variant transition-colors">
            Book Architecture Review
          </button>
        </div>
        <div className="md:w-1/2 h-64 relative rounded-lg overflow-hidden">
          <img
            alt="Corporate meeting room"
            className="w-full h-full object-cover opacity-60"
            src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
        </div>
      </section>
    </main>
  );
}
