import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'available' | 'sold'>('all');

  const filteredProducts = products.filter(product => {
    if (filter === 'available') return product.available;
    if (filter === 'sold') return !product.available;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Gallery
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Explore our exclusive collection of automotive art pieces
        </p>

        {/* Filters - Replit style */}
        <div className="flex items-center space-x-1 bg-gray-100 dark:bg-karma-gray rounded-lg p-1 w-fit">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              filter === 'all'
                ? 'bg-white dark:bg-karma-dark text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('available')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              filter === 'available'
                ? 'bg-white dark:bg-karma-dark text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setFilter('sold')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              filter === 'sold'
                ? 'bg-white dark:bg-karma-dark text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Sold Out
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No products found for the selected filter.
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;