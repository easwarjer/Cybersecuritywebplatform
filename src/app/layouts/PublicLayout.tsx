import React from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Shield, Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';
import logoImg from '../../imports/image.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImg} alt="EswarSecurity" className="h-10 w-auto object-contain" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-400",
                  location.pathname === link.path ? "text-blue-500" : "text-slate-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
            >
              Client Login
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path ? "bg-slate-800 text-blue-500" : "text-slate-300 hover:bg-slate-800 hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              Client Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <img src={logoImg} alt="EswarSecurity" className="h-8 w-auto object-contain" />
          </Link>
          <p className="text-slate-400 text-sm">
            Securing the digital frontier with world-class vulnerability assessment and penetration testing.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Web App Pentesting</li>
            <li>Network Security</li>
            <li>Cloud Security Assessment</li>
            <li>Compliance Audits</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link to="/about" className="hover:text-cyan-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-slate-400 text-sm mb-4">Stay updated with our latest security insights.</p>
          <div className="flex">
            <input type="email" placeholder="Enter email" className="bg-slate-900 border border-slate-700 text-white px-3 py-2 rounded-l-md w-full text-sm focus:outline-none focus:border-cyan-500" />
            <button className="bg-cyan-500 text-slate-950 px-3 py-2 rounded-r-md hover:bg-cyan-600 transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} EswarSecurity. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
