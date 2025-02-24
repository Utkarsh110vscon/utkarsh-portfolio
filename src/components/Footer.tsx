import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--muted))] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Utkarsh Kumar</h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-4 max-w-md mx-auto md:mx-0">
              A passionate full-stack developer focused on creating beautiful and user-friendly web applications.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://github.com/Utkarsh110vscon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/utkarsh5934/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:www.utkarshdev694@gmail.com"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
              <li>Ranchi, Jharkhand</li>
              <li>utkarshdev694@gmail.com</li>
              <li>+91 6207115934</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[hsl(var(--muted-foreground))] border-opacity-20">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="text-[hsl(var(--muted-foreground))] text-sm text-center md:text-left">
              © {currentYear} Utkarsh Kumar. All rights reserved.
            </p>
            <p className="text-[hsl(var(--muted-foreground))] text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}