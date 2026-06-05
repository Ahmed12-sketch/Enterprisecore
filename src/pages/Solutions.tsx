export default function Solutions() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="z-10">
            <span className="inline-block py-1 px-3 mb-4 bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm rounded-full">B2B SOLUTIONS</span>
            <h1 className="text-display font-bold text-primary mb-lg">Architecting the Future of Enterprise.</h1>
            <p className="text-body-lg text-on-surface-variant mb-xl max-w-lg">Scalable cloud infrastructure, AI-driven business intelligence, and military-grade security tailored for modern global enterprises.</p>
            <button className="px-xl py-md bg-primary text-on-primary text-label-md font-medium rounded-lg flex items-center gap-sm hover:opacity-90 transition-all">
              View Ecosystem <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-xl bg-surface-container overflow-hidden shadow-xl border border-outline-variant">
              <img
                alt="Digital Connectivity"
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-sm p-lg rounded-lg shadow-lg border border-outline-variant max-w-[200px]">
              <p className="text-label-sm text-secondary uppercase tracking-wide mb-xs">Network Uptime</p>
              <p className="text-headline-sm text-primary font-bold">99.999%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-md">
              {[
                { icon: 'cloud_sync', title: 'Hybrid Scaling', desc: 'Elastic resource allocation across multi-cloud environments.' },
                { icon: 'speed', title: 'Edge Priority', desc: 'Minimize latency with global CDN and edge computing nodes.' },
                { icon: 'account_tree', title: 'Managed Ops', desc: 'Automated deployment pipelines and serverless orchestration.' },
                { icon: 'terminal', title: 'Dev API', desc: 'Robust SDKs for seamless legacy system integration.' },
              ].map(({ icon, title, desc }, i) => (
                <div key={title} className={`bg-surface-container-lowest p-lg rounded border border-outline-variant${i % 2 !== 0 ? ' mt-lg' : ''}`}>
                  <span className="material-symbols-outlined text-secondary mb-sm">{icon}</span>
                  <h3 className="text-headline-sm mb-xs">{title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-headline-lg text-primary mb-md">Cloud Infrastructure</h2>
            <p className="text-body-md text-on-surface-variant mb-lg">Our cloud backbone is engineered for mission-critical reliability. We provide the structural stability required for global financial systems, healthcare platforms, and logistics networks.</p>
            <ul className="space-y-sm mb-xl">
              {['Multi-region redundant failovers', 'Zero-downtime maintenance windows', 'Compliance-ready (SOC2, GDPR, HIPAA)'].map(item => (
                <li key={item} className="flex items-center gap-sm text-label-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span> {item}
                </li>
              ))}
            </ul>
            <div className="p-lg bg-surface-container-highest rounded border-l-4 border-secondary">
              <p className="text-body-sm italic text-on-surface-variant mb-xs">"Transitioning to EnterpriseCore Cloud reduced our operational overhead by 40% in six months."</p>
              <p className="text-label-sm font-bold text-primary">— CTO, Global Logistics Corp</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Driven Insights */}
      <section className="py-xl">
        <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-headline-lg text-primary mb-md">AI-Driven Insights</h2>
            <p className="text-body-md text-on-surface-variant mb-lg">Transform raw data into strategic intelligence. Our proprietary AI models analyze cross-channel patterns to predict market shifts before they happen.</p>
            <div className="space-y-md mb-xl">
              {[
                { icon: 'analytics', title: 'Predictive Forecasting', desc: 'Accurate demand planning using deep learning neural networks.' },
                { icon: 'auto_awesome', title: 'Automated Intelligence', desc: 'Real-time anomaly detection and operational process optimization.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-container rounded flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <div>
                    <h4 className="text-label-md font-bold text-primary">{title}</h4>
                    <p className="text-body-sm text-on-surface-variant">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="px-lg py-sm border border-primary text-primary text-label-md font-medium rounded hover:bg-surface-container transition-all">Explore Case Studies</button>
          </div>
          <div className="relative h-[400px]">
            <div className="absolute inset-0 bg-primary-container rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="AI Dashboard"
                className="w-full h-full object-cover opacity-80"
                src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Security */}
      <section className="py-xl bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="text-center mb-xl max-w-2xl mx-auto">
            <h2 className="text-headline-lg text-primary mb-md">Cyber Security Excellence</h2>
            <p className="text-body-md text-on-surface-variant">Fortifying your perimeter in an era of escalating threats. We provide a comprehensive shield for your data assets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { icon: 'shield', title: 'End-to-End Encryption', desc: 'AES-256 bit encryption for data at rest and in transit, ensuring total privacy.' },
              { icon: 'radar', title: 'Threat Monitoring', desc: '24/7 Security Operations Center (SOC) with AI-powered intrusion detection.' },
              { icon: 'key', title: 'Identity Access', desc: 'Biometric MFA and Role-Based Access Control (RBAC) across your ecosystem.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-xl border border-outline-variant rounded bg-white hover:border-secondary transition-colors group hover:-translate-y-1 duration-300">
                <span className="material-symbols-outlined text-4xl text-primary mb-md group-hover:text-secondary transition-colors">{icon}</span>
                <h3 className="text-headline-sm mb-sm">{title}</h3>
                <p className="text-body-sm text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary text-on-primary">
        <div className="max-w-max-width mx-auto px-margin-desktop text-center">
          <h2 className="text-display font-bold mb-lg">Ready to Scale Your Enterprise?</h2>
          <p className="text-body-lg text-on-primary-container mb-xl max-w-xl mx-auto">Join 500+ global organizations that rely on EnterpriseCore for their mission-critical digital operations.</p>
          <div className="flex flex-col md:flex-row justify-center gap-md">
            <button className="px-xl py-md bg-secondary text-on-secondary text-label-md font-medium rounded-lg shadow-lg hover:opacity-90 transition-all">Schedule Consultation</button>
            <button className="px-xl py-md border border-on-primary text-on-primary text-label-md font-medium rounded-lg hover:bg-white/10 transition-all">Download Solutions Brief</button>
          </div>
        </div>
      </section>
    </main>
  );
}
