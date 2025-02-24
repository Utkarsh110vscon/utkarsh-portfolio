import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed w-full bg-[hsl(var(--background))] bg-opacity-80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold">
              Portfolio
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-[hsl(var(--primary))] ${isActive ? 'text-[hsl(var(--primary))]' : 'text-[hsl(var(--foreground))]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <a
                href="https://github.com/Utkarsh110vscon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/utkarsh5934/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:www.utkarshdev694@gmail.com"
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[hsl(var(--background))] shadow-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive
                    ? 'text-[hsl(var(--primary))] bg-[hsl(var(--accent))]'
                    : 'text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex space-x-4 px-3 py-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}