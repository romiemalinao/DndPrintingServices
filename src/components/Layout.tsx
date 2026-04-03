import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Printer, Phone, Facebook, Instagram } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'Services', path: 'services' },
    { name: 'Portfolio', path: 'portfolio' },
    { name: 'Order Now', path: 'order' },
    { name: 'Contact', path: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-3 group">
            <img src="/logo.jpg" alt="DnD Logo" className="w-14 h-14 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none text-gray-900">
                DnD <span className="text-blue-600">PRINTING</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">Services</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => scrollToSection(link.path)}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://www.facebook.com/profile.php?id=61580757008333"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-900 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-white z-50 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => scrollToSection(link.path)}
                  className="text-left px-4 py-4 text-2xl font-bold text-gray-900 border-b border-gray-50 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61580757008333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 text-white px-5 py-5 rounded-2xl text-xl font-bold shadow-xl shadow-blue-100"
                >
                  Order Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.jpg" alt="DnD Logo" className="w-16 h-16 object-contain rounded-xl" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter leading-none text-white">DnD <span className="text-blue-400">PRINTING</span></span>
                <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">Services</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              Ang inyong katuwang sa lahat ng printing needs. Mabilis, malinaw, at abot-kayang serbisyo para sa bawat Pilipino.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61580757008333" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/#home" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/#services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <span>0912-345-6789</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 text-blue-400 shrink-0">@</div>
                <span>dndprintingservices2025@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 text-blue-400 shrink-0">📍</div>
                <span>Cebu City, Philippines</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-center items-center gap-4">
          <p>© 2026 DnD Printing Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href="https://www.facebook.com/profile.php?id=61580757008333"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all group"
      >
        <Printer className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="font-bold">Order Now</span>
      </a>
    </motion.div>
  );
};
