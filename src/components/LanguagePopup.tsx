import React, { useState } from 'react';
import { X } from 'lucide-react';

interface LanguagePopupProps {
  onClose: () => void;
}

const LanguagePopup: React.FC<LanguagePopupProps> = ({ onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState('SPAIN / EUR');
  const [selectedLanguage, setSelectedLanguage] = useState('ESPAÑOL');

  const countries = [
    'SPAIN / EUR',
    'ITALY / EUR',
    'FRANCE / EUR',
    'GERMANY / EUR',
    'USA / USD',
    'UK / GBP'
  ];

  const languages = [
    'ESPAÑOL',
    'ITALIANO',
    'FRANÇAIS',
    'DEUTSCH',
    'ENGLISH'
  ];

  const handleSave = () => {
    localStorage.setItem('karma-country', selectedCountry);
    localStorage.setItem('karma-language', selectedLanguage);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-karma-dark rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            WELCOME TO KARMA
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
              STAI SPEDENDO IN:
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-karma-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-karma-purple focus:border-transparent"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-karma-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-karma-purple focus:border-transparent"
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full mt-6 bg-black dark:bg-white text-white dark:text-black py-3 px-4 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          SALVA
        </button>
      </div>
    </div>
  );
};

export default LanguagePopup;