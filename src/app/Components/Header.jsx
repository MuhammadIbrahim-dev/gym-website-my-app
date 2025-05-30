'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/classes', label: 'Classes' },
  { href: '/membership', label: 'Membership' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Logo />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`uppercase tracking-wider text-sm font-medium transition-colors duration-300 pb-1 border-b-2 ${
                  pathname === link.href
                    ? 'text-yellow-400 border-yellow-400'
                    : 'text-white border-transparent hover:text-yellow-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="px-6 py-2 rounded-full border-2 border-yellow-400 text-white hover:bg-yellow-400/10 transition-all duration-300"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-yellow-400 focus:outline-none transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 uppercase tracking-wider text-sm font-medium border-b-2 pb-1 ${
                pathname === link.href
                  ? 'text-yellow-400 border-yellow-400'
                  : 'text-white border-transparent hover:text-yellow-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 space-y-2">
            <Link 
              href="/login" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-2 rounded-full border-2 border-yellow-400 text-white hover:bg-yellow-400/10 transition-all duration-300"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
