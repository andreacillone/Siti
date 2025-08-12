import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0 aspect-[3/4]">
                <img
                  src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Featured Artwork"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center lg:text-left text-gray-900 dark:text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-karma-purple">
                {t('home.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-2 font-light">
                {t('home.subtitle')}
              </p>
              <p className="text-sm md:text-base mb-8 text-gray-600 dark:text-gray-400">
                {t('home.unique')}
              </p>
              
              <Link
                to="/gallery"
                className="inline-flex items-center px-8 py-3 bg-karma-purple text-white font-medium rounded-md hover:bg-karma-purple/90 transition-colors group"
              >
                {t('home.explore')}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Old hero section - keeping as backup, can be removed */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-4/5 mx-auto">
            <img
              src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Featured Artwork"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-light">
            {t('home.subtitle')}
          </p>
          <p className="text-sm md:text-base mb-8 text-gray-200">
            {t('home.unique')}
          </p>
          
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-3 bg-karma-purple text-white font-medium rounded-md hover:bg-karma-purple/90 transition-colors group"
          >
            {t('home.explore')}
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('home.section.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('home.section.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-karma-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-karma-purple">1/1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('home.feature1.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.feature1.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-karma-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-karma-purple">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('home.feature2.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.feature2.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-karma-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-karma-purple">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('home.feature3.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.feature3.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;