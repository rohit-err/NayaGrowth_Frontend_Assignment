const Footer = () => {
  return (
    <footer className="bg-surface-container-low py-12 border-t border-outline/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-lg font-extrabold text-primary">Sere Innovations</h2>
            <p className="text-sm text-on-surface-variant mt-1">Helping farmers hatch their own future.</p>
            <p className="text-xs text-on-surface-variant mt-4 opacity-70">© 2026 Sere Innovations. All rights reserved.</p>
          </div>
          <div className="grid grid-cols-2 md:flex gap-x-12 gap-y-4">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-primary mb-2">Support</p>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Farmer Guide</a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Warranty Info</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-primary mb-2">Company</p>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Sales</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-outline/5 flex flex-wrap gap-6 text-xs text-on-surface-variant/70">
          <a className="hover:underline" href="#">Privacy Policy</a>
          <a className="hover:underline" href="#">Terms of Service</a>
          <span>Address: 123 Rural Tech Park, Agri-Zone, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
