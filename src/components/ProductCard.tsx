import React from 'react';
import { Link } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  idCode: string;
  numberFrame: string;
  videoLinks: string[];
  available: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-white dark:bg-karma-dark rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Image Container - Larger as per Lovable style */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Status Badge - Positioned like Lovable */}
          <div className="absolute top-3 right-3">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                product.available
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
              }`}
            >
              {product.available ? 'Available' : 'Sold Out'}
            </span>
          </div>
        </div>

        {/* Content - Reduced text area as per Lovable style */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-karma-purple transition-colors">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-karma-purple">
              €{product.price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              #{product.idCode}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;