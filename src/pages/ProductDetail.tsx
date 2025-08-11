import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product not found
          </h1>
          <Link
            to="/gallery"
            className="text-karma-purple hover:underline"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const currentProductIndex = products.findIndex(p => p.id === id);
  const nextProduct = products[currentProductIndex + 1];
  const prevProduct = products[currentProductIndex - 1];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleAddToCart = () => {
    if (product.available) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        idCode: product.idCode
      });
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/gallery"
          className="inline-flex items-center text-karma-purple hover:text-karma-purple/80 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to gallery
        </Link>

        {nextProduct && (
          <button
            onClick={() => navigate(`/product/${nextProduct.id}`)}
            className="inline-flex items-center text-karma-purple hover:text-karma-purple/80 transition-colors"
          >
            Next product
            <ArrowRight size={20} className="ml-2" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-100 dark:bg-karma-gray rounded-lg overflow-hidden">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* Image Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-black/80 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-black/80 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {product.images.length}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-karma-purple mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              2025
            </p>
          </div>

          {/* Expandable Sections */}
          <div className="space-y-2">
            <button
              onClick={() => toggleSection('frame')}
              className="w-full flex items-center justify-between p-4 bg-gray-100 dark:bg-karma-gray rounded-lg text-left hover:bg-gray-200 dark:hover:bg-karma-gray/80 transition-colors"
            >
              <span className="font-medium text-gray-900 dark:text-white">FRAME USED</span>
              <ChevronRight 
                size={20} 
                className={`transform transition-transform ${expandedSection === 'frame' ? 'rotate-90' : ''}`}
              />
            </button>
            {expandedSection === 'frame' && (
              <div className="p-4 bg-gray-50 dark:bg-karma-gray/50 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">{product.numberFrame}</p>
              </div>
            )}

            <button
              onClick={() => toggleSection('dimensions')}
              className="w-full flex items-center justify-between p-4 bg-gray-100 dark:bg-karma-gray rounded-lg text-left hover:bg-gray-200 dark:hover:bg-karma-gray/80 transition-colors"
            >
              <span className="font-medium text-gray-900 dark:text-white">TOTAL DIMENSIONS</span>
              <ChevronRight 
                size={20} 
                className={`transform transition-transform ${expandedSection === 'dimensions' ? 'rotate-90' : ''}`}
              />
            </button>
            {expandedSection === 'dimensions' && (
              <div className="p-4 bg-gray-50 dark:bg-karma-gray/50 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">60cm x 80cm</p>
              </div>
            )}

            <button
              onClick={() => toggleSection('idcode')}
              className="w-full flex items-center justify-between p-4 bg-gray-100 dark:bg-karma-gray rounded-lg text-left hover:bg-gray-200 dark:hover:bg-karma-gray/80 transition-colors"
            >
              <span className="font-medium text-gray-900 dark:text-white">ID CODE</span>
              <ChevronRight 
                size={20} 
                className={`transform transition-transform ${expandedSection === 'idcode' ? 'rotate-90' : ''}`}
              />
            </button>
            {expandedSection === 'idcode' && (
              <div className="p-4 bg-gray-50 dark:bg-karma-gray/50 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">#{product.idCode}</p>
              </div>
            )}

            <button
              onClick={() => toggleSection('videos')}
              className="w-full flex items-center justify-between p-4 bg-gray-100 dark:bg-karma-gray rounded-lg text-left hover:bg-gray-200 dark:hover:bg-karma-gray/80 transition-colors"
            >
              <span className="font-medium text-gray-900 dark:text-white">VIDEO LINKS</span>
              <ChevronRight 
                size={20} 
                className={`transform transition-transform ${expandedSection === 'videos' ? 'rotate-90' : ''}`}
              />
            </button>
            {expandedSection === 'videos' && (
              <div className="p-4 bg-gray-50 dark:bg-karma-gray/50 rounded-lg">
                {product.videoLinks.length > 0 ? (
                  <div className="space-y-2">
                    {product.videoLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-karma-purple hover:underline"
                      >
                        Video {index + 1}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">No videos available</p>
                )}
              </div>
            )}
          </div>

          {/* Price and Add to Cart */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                €{product.price.toLocaleString()}
              </span>
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  product.available
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                }`}
              >
                {product.available ? 'Available' : 'Sold Out'}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.available}
              className={`w-full flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors ${
                product.available
                  ? 'bg-karma-purple text-white hover:bg-karma-purple/90'
                  : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              }`}
            >
              <ShoppingCart size={20} className="mr-2" />
              {product.available ? 'Add to Cart' : 'Sold Out'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;