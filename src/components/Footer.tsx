import React from 'react';
import Logo from './Logo';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#about' },
      { name: 'AI Technology', href: '#about' },
      { name: 'Careers', href: '#' },
    ],
    research: [
      { name: 'AI-Enhanced Research', href: '#research' },
      { name: 'Current Projects', href: '#research' },
      { name: 'Publications', href: '#' },
      { name: 'Resources', href: '#' },
    ],
    collaborate: [
      { name: 'How AI Works', href: '#collaborate' },
      { name: 'Find Collaborators', href: '#collaborate' },
      { name: 'Find Mentors', href: '#collaborate' },
      { name: 'Success Stories', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Mentor FAQ', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '📚' },
    { name: 'YouTube', href: '#', icon: '📹' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Logo size="md" showText={false} className="mb-4" />
            <div className="text-gray-300 mb-4">
              <div className="text-xl font-semibold text-white mb-2">KOBO LABS</div>
              <p className="text-gray-400 leading-relaxed">
                Connecting researchers worldwide through AI-powered collaboration to accelerate scientific discovery 
                and create breakthrough innovations. Find world-class mentors and make every research domain easier, better, and faster.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <EnvelopeIcon className="w-5 h-5" />
                <span>hello@kobolabs.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <PhoneIcon className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPinIcon className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Research</h3>
            <ul className="space-y-3">
              {footerLinks.research.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaborate Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Collaborate</h3>
            <ul className="space-y-3">
              {footerLinks.collaborate.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <SparklesIcon className="w-6 h-6 text-primary-400 mr-2" />
              <h3 className="text-xl font-semibold">Stay Updated on AI Research</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Get the latest AI-powered research collaboration opportunities, mentor connections, and platform updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Kobo Labs. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
