/**
 * Footer Component
 * Displays application copyright and footer information.
 */
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          © 2024 <span className="font-semibold">Developer Zone</span>. All rights reserved.
        </p>
        <nav className="mt-2">
          <a href="/privacy-policy" className="text-blue-400 hover:underline mx-2">
            Privacy Policy
          </a>
          |
          <a href="/terms-of-service" className="text-blue-400 hover:underline mx-2">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
