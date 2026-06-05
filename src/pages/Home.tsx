interface HomeProps {
  onNavigate: (page: 'home' | 'solutions' | 'pricing' | 'about') => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(49,107,243,0.08) 0%, transparent 70%)' }}>
        <div className="max-w-max-width mx-auto px-margin-desktop grid md:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm mb-6">NEXT GENERATION PLATFORM</span>
            <h1 className="text-display font-bold text-primary leading-tight mb-6">Empowering Enterprise Excellence</h1>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-lg">
              Accelerate your digital transformation with our unified ecosystem designed for planetary-scale operations and iron-clad reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-on-secondary px-8 py-4 rounded-lg text-label-md font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                Request Demo
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button
                onClick={() => onNavigate('solutions')}
                className="border border-outline text-primary px-8 py-4 rounded-lg text-label-md font-medium hover:bg-surface-container-low transition-all"
              >
                View Documentation
              </button>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80" alt="Team member" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80" alt="Team member" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80" alt="Team member" />
              </div>
              <span className="text-on-surface-variant text-body-sm">Trusted by 500+ global enterprises</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="bg-white p-4 rounded-xl shadow-2xl border border-outline-variant relative z-10">
              <img
                className="rounded-lg w-full"
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Enterprise dashboard"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-sm p-lg rounded-lg shadow-lg border border-outline-variant max-w-[200px]">
              <p className="text-label-sm text-secondary mb-xs uppercase tracking-wide">Network Uptime</p>
              <p className="text-headline-sm text-primary font-bold">99.999%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['GLOBAL BANK', 'TECH CORP', 'LOGISTICS AI', 'CLOUD NATIVE', 'DATA VENTURES'].map(name => (
              <span key={name} className="text-headline-sm font-bold tracking-tighter">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg text-primary mb-4">Enterprise-Grade Performance</h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">Engineered to meet the rigorous demands of global corporations, ensuring your infrastructure is always one step ahead.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-gutter">
            {/* Scalability */}
            <div className="group p-8 bg-surface-container-lowest border border-outline-variant rounded-xl md:col-span-2 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4">trending_up</span>
                  <h3 className="text-headline-sm text-primary mb-2">Infinite Scalability</h3>
                  <p className="text-body-md text-on-surface-variant max-w-md">Our cloud-native architecture expands with your business. Process millions of transactions without breaking a sweat.</p>
                </div>
                <img
                  className="hidden sm:block w-32 h-32 object-cover rounded-lg"
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=256"
                  alt="Scalability chart"
                />
              </div>
              <div className="flex gap-4">
                <span className="bg-surface-container text-on-surface px-3 py-1 rounded text-label-sm">Elastic Compute</span>
                <span className="bg-surface-container text-on-surface px-3 py-1 rounded text-label-sm">Global CDN</span>
              </div>
            </div>
            {/* Security */}
            <div className="group p-8 bg-primary text-on-primary rounded-xl hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <span className="material-symbols-outlined text-on-primary text-4xl mb-4">verified_user</span>
              <h3 className="text-headline-sm mb-2">Zero-Trust Security</h3>
              <p className="text-body-sm text-white/70 mb-8">Military-grade encryption and automated threat detection integrated at every layer of your stack.</p>
              <ul className="space-y-3">
                {['End-to-end Encryption', 'SOC2 Type II Compliant', 'IAM Controls'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-label-sm">
                    <span className="material-symbols-outlined text-sm">check_circle</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Analytics */}
            <div className="group p-8 bg-surface-container-lowest border border-outline-variant rounded-xl md:col-span-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">monitoring</span>
              <h3 className="text-headline-sm text-primary mb-2">Advanced Analytics</h3>
              <p className="text-body-md text-on-surface-variant">Turn raw data into actionable insights with our proprietary AI-driven predictive modeling engine.</p>
            </div>
            {/* Unified Control */}
            <div className="group p-8 bg-surface-container-lowest border border-outline-variant rounded-xl md:col-span-2 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <div className="grid grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-headline-sm text-primary mb-2">Unified Control Plane</h3>
                  <p className="text-body-md text-on-surface-variant">Manage your entire enterprise from a single pane of glass, reducing operational complexity by up to 40%.</p>
                </div>
                <img
                  className="rounded-lg shadow-lg"
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Team collaboration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-headline-lg text-primary mb-6">Seamless Integration in Three Phases</h2>
              <p className="text-body-md text-on-surface-variant mb-8">We partner with your team to ensure a frictionless transition that respects your existing workflows while unlocking new capabilities.</p>
              <button className="text-secondary text-label-md flex items-center gap-2 group hover:underline">
                Read the implementation guide
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
              </button>
            </div>
            <div className="md:w-2/3 grid gap-8">
              {[
                { n: '1', title: 'Architecture Assessment', desc: 'Our experts conduct a deep-dive analysis of your current infrastructure to identify optimization opportunities.' },
                { n: '2', title: 'Pilot Deployment', desc: 'Roll out a sandboxed environment to validate performance benchmarks and security protocols with live data.' },
                { n: '3', title: 'Global Rollout', desc: 'Scale across your entire organization with 24/7 white-glove support and automated migration tools.' },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex gap-6 p-6 bg-white rounded-xl border border-outline-variant">
                  <span className="w-12 h-12 flex items-center justify-center bg-primary text-on-primary rounded-full text-headline-sm font-bold shrink-0">{n}</span>
                  <div>
                    <h4 className="text-headline-sm text-primary mb-2">{title}</h4>
                    <p className="text-body-md text-on-surface-variant">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="bg-primary-container rounded-3xl overflow-hidden flex flex-col md:flex-row">
            <div className="p-12 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-headline-lg text-white mb-4">Ready to Transform?</h2>
              <p className="text-body-md text-on-primary-container mb-8">Join the world's most innovative enterprises. Schedule a personalized walkthrough of the platform today.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <span className="material-symbols-outlined text-secondary">support_agent</span>
                  <span className="text-label-md">24/7 Dedicated Account Manager</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <span className="material-symbols-outlined text-secondary">bolt</span>
                  <span className="text-label-md">99.99% Uptime SLA Guaranteed</span>
                </div>
              </div>
            </div>
            <div className="p-12 md:w-1/2 bg-white m-4 rounded-2xl">
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-label-md text-on-surface block">First Name</label>
                    <input className="w-full border border-outline-variant rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="John" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-md text-on-surface block">Last Name</label>
                    <input className="w-full border border-outline-variant rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Doe" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-label-md text-on-surface block">Work Email</label>
                  <input className="w-full border border-outline-variant rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="john@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-label-md text-on-surface block">Company Size</label>
                  <select className="w-full border border-outline-variant rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white">
                    <option>500 - 1,000 employees</option>
                    <option>1,000 - 5,000 employees</option>
                    <option>5,000+ employees</option>
                  </select>
                </div>
                <button className="w-full bg-secondary text-on-secondary py-4 rounded-lg text-label-md font-medium hover:opacity-90 transition-all" type="submit">
                  Submit Request
                </button>
                <p className="text-center text-body-sm text-on-surface-variant">By submitting, you agree to our <a className="underline" href="#">Privacy Policy</a>.</p>
              </form>
            </div>
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
