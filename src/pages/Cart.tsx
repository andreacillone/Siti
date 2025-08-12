import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const Cart: React.FC = () => {
  const { items, removeItem, total, clearCart } = useCart();
  const { t, formatPrice } = useLanguage();

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t('cart.empty')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('cart.empty.desc')}
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center px-6 py-3 bg-karma-purple text-white font-medium rounded-md hover:bg-karma-purple/90 transition-colors"
          >
            {t('cart.browse')}
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('cart.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {items.length} {items.length === 1 ? t('cart.item') : t('cart.items')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white dark:bg-karma-dark rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ID: #{item.idCode}
                  </p>
                  <p className="text-lg font-bold text-karma-purple mt-1">
                    {formatPrice(item.price)}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center pt-4">
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 font-medium"
            >
              {t('cart.clear')}
            </button>
            
            <Link
              to="/gallery"
              className="text-karma-purple hover:underline font-medium"
            >
              {t('cart.continue')}
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-karma-dark rounded-lg shadow-lg p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('cart.summary')}
            </h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('cart.subtotal')}</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {formatPrice(total)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('cart.shipping')}</span>
                <span className="font-medium text-gray-900 dark:text-white">{t('cart.free')}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('cart.tax')}</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {formatPrice(Math.round(total * 0.1))}
                </span>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">{t('cart.total')}</span>
                  <span className="text-lg font-bold text-karma-purple">
                    {formatPrice(Math.round(total * 1.1))}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-karma-purple text-white py-3 px-4 rounded-md font-medium hover:bg-karma-purple/90 transition-colors text-center block"
            >
              {t('cart.checkout')}
            </Link>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              {t('cart.secure')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;