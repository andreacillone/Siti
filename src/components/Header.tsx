import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Sun, Moon, User, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const { isDark, toggleTheme } = useTheme();
  const { itemCount } = useCart();
  const { user } = useAuth();
  const { t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <img 
                src="/karma-logo.svg" 
                alt="KARMA" 
                className="h-8 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                to="/gallery" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/gallery') 
                    ? 'text-karma-purple' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-karma-purple'
                }`}
              >
                {t('nav.gallery')}
              </Link>
              <Link 
                to="/support" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/support') 
                    ? 'text-karma-purple' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-karma-purple'
                }`}
              >
                {t('nav.support')}
              </Link>
              <button
                onClick={onSearchClick}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-karma-purple transition-colors"
              >
                {t('nav.search')}
              </button>
            </nav>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            <button
              onClick={onSearchClick}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-karma-purple transition-colors md:hidden"
            >
              <Search size={20} />
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-karma-purple transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {user?.isAdmin && (
              <Link
                to="/admin"
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-karma-purple transition-colors"
              >
                <Settings size={20} />
              </Link>
            )}

            <Link
              to="/account"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-karma-purple transition-colors"
            >
              <User size={20} />
            </Link>

            <Link
              to="/cart"
              className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-karma-purple transition-colors"
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-karma-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;