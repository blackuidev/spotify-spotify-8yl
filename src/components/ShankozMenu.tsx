import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useMobile } from '@/components/hooks/use-mobile';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

const ShankozMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile(); // Use the custom hook

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex items-center justify-between backdrop-blur-lg bg-white/10 border border-white/20 rounded-full px-6 py-3 shadow-lg">
        {/* Logo or Brand Name */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300">
          Shankoz
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-xl flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className="text-white text-2xl font-semibold hover:text-gray-200 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ShankozMenu;
