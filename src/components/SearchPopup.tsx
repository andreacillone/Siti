import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

interface SearchPopupProps {
  onClose: () => void;
}

const SearchPopup: React.FC<SearchPopupProps> = ({ onClose }) => {
  const [searchNumber, setSearchNumber] = useState('');

  const handleSearch = () => {
    if (searchNumber.trim()) {
      // Implement search logic here
      console.log('Searching for:', searchNumber);
      onClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-karma-dark rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Search
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              NUMBER
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-karma-purple font-medium">
                #
              </span>
              <input
                type="number"
                value={searchNumber}
                onChange={(e) => setSearchNumber(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="123"
                className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-karma-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-karma-purple focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="w-full mt-6 bg-karma-purple text-white py-3 px-4 rounded-md font-medium hover:bg-karma-purple/90 transition-colors"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchPopup;