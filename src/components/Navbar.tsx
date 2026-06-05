import { useState } from 'react';

type Page = 'home' | 'solutions' | 'pricing' | 'about';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Products', page: 'home' },
    { label: 'Solutions', page: 'solutions' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'About', page: 'about' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-surface-container-lowest border-b border-outline-variant shadow-sm">
      <nav className="max-w-max-width mx-auto px-margin-desktop flex justify-between items-center h-20">
        <div className="flex items-center gap-12">
          <button
            onClick={() => onNavigate('home')}
            className="text-headline-md font-bold text-primary"
          >
            EnterpriseCore
          </button>
          <div className="hidden md:flex gap-8">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`text-body-md transition-colors duration-200 ${
                  currentPage === page
                    ? 'text-secondary border-b-2 border-secondary pb-1'
                    : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200">
            Login
          </button>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-label-md font-medium active:scale-95 transition-transform">
            Request a Demo
          </button>
          <button
            className="md:hidden text-on-surface-variant"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-outline-variant px-margin-mobile py-md space-y-sm">
          {navLinks.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => { onNavigate(page); setMobileOpen(false); }}
              className={`block w-full text-left text-body-md py-sm ${
                currentPage === page ? 'text-secondary font-semibold' : 'text-on-surface-variant'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
