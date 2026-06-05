export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-high text-on-surface">
      <div className="max-w-max-width mx-auto px-margin-desktop py-xl grid grid-cols-2 md:grid-cols-4 gap-gutter">
        <div className="col-span-2 md:col-span-1">
          <div className="text-headline-sm font-bold text-on-surface mb-md">EnterpriseCore</div>
          <p className="text-body-sm text-on-surface-variant">Building the backbone of modern enterprise operations since 2024.</p>
        </div>
        <div>
          <h4 className="text-label-md font-bold mb-md">Legal</h4>
          <nav className="flex flex-col gap-sm">
            <a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all">Privacy Policy</a>
            <a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all">Terms of Service</a>
            <a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all">Security</a>
          </nav>
        </div>
        <div>
          <h4 className="text-label-md font-bold mb-md">Support</h4>
          <nav className="flex flex-col gap-sm">
            <a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all">Status</a>
            <a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all">Documentation</a>
            <a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all">Help Center</a>
          </nav>
        </div>
        <div>
          <h4 className="text-label-md font-bold mb-md">Social</h4>
          <nav className="flex flex-col gap-sm">
            <a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all">LinkedIn</a>
            <a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all">Twitter</a>
          </nav>
        </div>
      </div>
      <div className="max-w-max-width mx-auto px-margin-desktop py-md border-t border-outline-variant flex justify-between items-center">
        <span className="text-body-sm text-on-surface-variant">© 2024 EnterpriseCore Inc. All rights reserved.</span>
        <div className="flex gap-lg">
          <a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all">Privacy Policy</a>
          <a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
