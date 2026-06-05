import { useState } from 'react';

const leadership = [
  { name: 'Marcus Thorne', title: 'Chief Executive Officer', img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Elena Rodriguez', title: 'Chief Technology Officer', img: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Julian Vance', title: 'Chief Operating Officer', img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Sarah Chen', title: 'Chief Financial Officer', img: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function About() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-surface-container-lowest py-24 overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="z-10">
            <span className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-label-sm mb-md">MISSION DRIVEN</span>
            <h1 className="text-display font-bold text-primary mb-lg leading-tight">Engineering the backbone of modern enterprise operations.</h1>
            <p className="text-body-lg text-on-surface-variant mb-xl max-w-xl">We believe that institutional stability shouldn't come at the cost of innovation. Our mission is to provide the critical infrastructure that empowers global leaders to scale with absolute confidence.</p>
            <div className="flex gap-md">
              <button className="bg-primary text-on-primary px-xl py-md rounded-lg text-label-md font-medium hover:shadow-lg transition-all">Read Our Story</button>
              <button className="border border-outline-variant text-primary px-xl py-md rounded-lg text-label-md font-medium hover:bg-surface-container transition-all">View Careers</button>
            </div>
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <img
              alt="EnterpriseCore Mission"
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-0 skew-x-12 transform translate-x-1/2 pointer-events-none"></div>
      </section>

      {/* Core Values Bento */}
      <section className="py-24 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg text-primary mb-md">Our Core Values</h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">The principles that guide every line of code we write and every partnership we build.</p>
          </div>
          <div className="bento-grid">
            {/* Radical Security - wide */}
            <div className="col-span-12 md:col-span-8 bg-surface-container-lowest p-xl rounded-xl border border-outline-variant hover:border-secondary transition-colors group">
              <div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-lg mb-lg">
                <span className="material-symbols-outlined text-secondary">security</span>
              </div>
              <h3 className="text-headline-sm text-primary mb-md">Radical Security</h3>
              <p className="text-body-md text-on-surface-variant">In a world of constant threats, we build fortresses. Security isn't a feature; it's the foundation of everything we deliver to our enterprise clients.</p>
            </div>
            {/* Velocity - dark */}
            <div className="col-span-12 md:col-span-4 bg-primary text-on-primary p-xl rounded-xl border border-primary flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-on-primary-fixed flex items-center justify-center rounded-lg mb-lg">
                  <span className="material-symbols-outlined text-on-primary">bolt</span>
                </div>
                <h3 className="text-headline-sm mb-md">Velocity</h3>
                <p className="text-body-sm opacity-80">Speed without stability is a liability. We prioritize high-performance systems that move as fast as the market demands.</p>
              </div>
              <div className="mt-lg pt-lg border-t border-on-primary-fixed-variant">
                <span className="text-label-md">99.99% Uptime Commitment</span>
              </div>
            </div>
            {/* Integrity */}
            <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-xl rounded-xl border border-outline-variant hover:border-secondary transition-colors">
              <div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-lg mb-lg">
                <span className="material-symbols-outlined text-secondary">handshake</span>
              </div>
              <h3 className="text-headline-sm text-primary mb-md">Integrity</h3>
              <p className="text-body-sm text-on-surface-variant">Transparent communication and absolute accountability in every client engagement.</p>
            </div>
            {/* Scalability - wide */}
            <div className="col-span-12 md:col-span-8 bg-surface-container-lowest p-xl rounded-xl border border-outline-variant flex gap-xl items-center hover:border-secondary transition-colors overflow-hidden">
              <div className="flex-1">
                <div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-lg mb-lg">
                  <span className="material-symbols-outlined text-secondary">architecture</span>
                </div>
                <h3 className="text-headline-sm text-primary mb-md">Scalability</h3>
                <p className="text-body-md text-on-surface-variant">Architecting for tomorrow. Our solutions expand seamlessly with your organization's growth.</p>
              </div>
              <div className="hidden md:block w-48 shrink-0">
                <div className="grid grid-cols-3 gap-2 opacity-20">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-8 bg-secondary rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-lg">
            <div>
              <h2 className="text-headline-lg text-primary mb-md">Executive Leadership</h2>
              <p className="text-body-md text-on-surface-variant max-w-xl">A team of seasoned veterans from the world's most successful technology and finance institutions.</p>
            </div>
            <button className="text-secondary text-label-md flex items-center gap-xs hover:underline">
              Meet the entire team <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-xl">
            {leadership.map(({ name, title, img }) => (
              <div key={name} className="group">
                <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-lg relative">
                  <img
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={img}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-lg">
                    <div className="flex gap-sm">
                      <span className="w-8 h-8 bg-white/20 backdrop-blur rounded flex items-center justify-center text-white cursor-pointer hover:bg-white/40">
                        <span className="material-symbols-outlined text-base">link</span>
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="text-headline-sm text-primary">{name}</h4>
                <p className="text-label-md text-secondary uppercase tracking-wider mt-xs">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section className="py-24 bg-surface border-t border-outline-variant">
        <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-headline-lg text-primary mb-md">Connect with Sales</h2>
            <p className="text-body-md text-on-surface-variant mb-xl">Ready to transform your operations? Our specialists are here to discuss your specific infrastructure needs.</p>
            <form className="space-y-lg" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-md">
                <div className="space-y-sm">
                  <label className="text-label-md text-on-surface block">First Name</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="Enter first name" type="text" />
                </div>
                <div className="space-y-sm">
                  <label className="text-label-md text-on-surface block">Last Name</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="Enter last name" type="text" />
                </div>
              </div>
              <div className="space-y-sm">
                <label className="text-label-md text-on-surface block">Work Email</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="name@company.com" type="email" />
              </div>
              <div className="space-y-sm">
                <label className="text-label-md text-on-surface block">Company Size</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none">
                  <option>1-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-1000 employees</option>
                  <option>1000+ employees</option>
                </select>
              </div>
              <div className="space-y-sm">
                <label className="text-label-md text-on-surface block">Message</label>
                <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="How can we help you?" rows={4}></textarea>
              </div>
              <button
                className={`w-full text-on-primary text-label-md font-medium py-lg rounded-lg transition-all shadow-md ${submitted ? 'bg-emerald-600' : 'bg-primary hover:bg-primary/90'}`}
                type="submit"
              >
                {submitted ? 'Message Sent!' : 'Submit Inquiry'}
              </button>
            </form>
          </div>

          {/* Map & Offices */}
          <div className="flex flex-col h-full">
            <div className="flex-grow rounded-xl overflow-hidden border border-outline-variant relative mb-xl min-h-[400px]">
              <img
                alt="Our Locations"
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
              <div className="absolute bottom-md left-md bg-white p-md rounded-lg shadow-lg border border-outline-variant">
                <p className="text-label-md text-primary">Headquarters</p>
                <p className="text-body-sm text-on-surface-variant">250 Park Avenue South, NYC</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              <div className="p-lg bg-surface-container-low rounded-lg">
                <h4 className="text-label-md text-primary mb-sm">New York Office</h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">250 Park Avenue South<br />New York, NY 10003<br />+1 (212) 555-0198</p>
              </div>
              <div className="p-lg bg-surface-container-low rounded-lg">
                <h4 className="text-label-md text-primary mb-sm">London Office</h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">80 Victoria Street<br />London SW1E 5JL, UK<br />+44 20 7946 0123</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
