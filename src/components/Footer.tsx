import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-800/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Left side - Logo and Links */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-xl font-bold text-karma-purple">
              KARMA
            </Link>
            
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/gallery" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-karma-purple transition-colors"
              >
                Gallery
              </Link>
              <Link 
                to="/support" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-karma-purple transition-colors"
              >
                Support
              </Link>
            </nav>
          </div>

          {/* Right side - Social and Copyright */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Social</span>
              <div className="flex items-center space-x-3">
                <a 
                  href="#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-karma-purple transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-karma-purple transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-karma-purple transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-500">
              ©2025 Karma
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;