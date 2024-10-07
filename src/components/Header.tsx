import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Home, Briefcase, Wallet, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Zap size={24} className="text-primary-500" />
          <span className="text-xl font-bold text-primary-500">Promorang</span>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link to="/" className="text-gray-600 hover:text-primary-500"><Home size={20} /></Link></li>
            <li><Link to="/tasks" className="text-gray-600 hover:text-primary-500"><Briefcase size={20} /></Link></li>
            <li><Link to="/wallet" className="text-gray-600 hover:text-primary-500"><Wallet size={20} /></Link></li>
            <li><Link to="/notifications" className="text-gray-600 hover:text-primary-500"><Bell size={20} /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;