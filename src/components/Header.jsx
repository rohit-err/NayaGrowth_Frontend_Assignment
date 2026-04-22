import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Solution", href: "#solution" },
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#benefits" },
    { name: "Who It's For", href: "#audience" }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-outline/10"
    >
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-extrabold tracking-tight text-primary">
          Sere Innovations
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a 
              key={link.name} 
              className="text-sm font-semibold text-on-surface hover:text-primary transition-colors" 
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(link.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <button className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-brand font-bold text-sm hover:opacity-90 transition-all shadow-sm hover:shadow-md">
          Enquire Now
        </button>

        {/* Mobile Hamburger Icon */}
        <button 
          className="md:hidden text-primary p-2 focus:outline-none flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span className="material-symbols-outlined text-3xl" aria-hidden="true">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-surface border-b border-outline/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map(link => (
                <a 
                  key={link.name} 
                  className="text-lg font-semibold text-on-surface py-2 border-b border-outline/5 hover:text-primary transition-colors" 
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const target = document.querySelector(link.href);
                    if (target) {
                      // Slight delay to allow menu closing animation to start
                      setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }, 50);
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
              <button 
                className="bg-primary text-on-primary w-full py-3 mt-4 rounded-brand font-bold text-lg hover:opacity-90 transition-all shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
