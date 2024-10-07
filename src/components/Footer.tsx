import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary-500 mb-4">Promorang</h3>
            <p className="text-sm text-gray-600">Connect, engage, and earn through social media tasks.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 hover:text-primary-500">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-primary-500">About Us</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-600 hover:text-primary-500">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-primary-500">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-primary-500">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary-500">Facebook</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary-500">Twitter</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary-500">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; 2024 Promorang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;