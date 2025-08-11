import React, { useState } from 'react';
import { User, Mail, Lock, LogOut, Settings, Package, Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Account: React.FC = () => {
  const { user, login, loginWithGoogle, logout, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      const success = await login(formData.email, formData.password);
      if (!success) {
        alert('Invalid credentials');
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      const success = await register(formData.email, formData.password, formData.name);
      if (!success) {
        alert('Registration failed');
      }
    }
  };

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (user) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Account
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Welcome back, {user.name}!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-karma-dark rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Profile Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-karma-purple" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                    <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-karma-purple" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-900 dark:text-white">{user.email}</p>
                  </div>
                </div>

                {user.isAdmin && (
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-karma-purple" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                      <p className="font-medium text-karma-purple">Administrator</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order History */}
            <div className="bg-white dark:bg-karma-dark rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Recent Orders
              </h2>
              
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">Order #001</span>
                    <span className="text-sm text-green-600 dark:text-green-400">Delivered</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">DATSUN - €2,500</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Ordered on March 15, 2025</p>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">Order #002</span>
                    <span className="text-sm text-karma-purple">Processing</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">PORSCHE LEGEND - €2,800</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Ordered on March 20, 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-karma-dark rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-karma-gray rounded-lg transition-colors">
                  <Package className="w-5 h-5 text-karma-purple" />
                  <span className="text-gray-700 dark:text-gray-300">View Orders</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-karma-gray rounded-lg transition-colors">
                  <Heart className="w-5 h-5 text-karma-purple" />
                  <span className="text-gray-700 dark:text-gray-300">Wishlist</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-karma-gray rounded-lg transition-colors">
                  <Settings className="w-5 h-5 text-karma-purple" />
                  <span className="text-gray-700 dark:text-gray-300">Account Settings</span>
                </button>

                {user.isAdmin && (
                  <a
                    href="/admin"
                    className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-karma-gray rounded-lg transition-colors"
                  >
                    <Settings className="w-5 h-5 text-karma-purple" />
                    <span className="text-gray-700 dark:text-gray-300">Admin Panel</span>
                  </a>
                )}
                
                <button
                  onClick={logout}
                  className="w-full flex items-center space-x-3 p-3 text-left hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-red-600 dark:text-red-400"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-karma-dark rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {isLogin ? 'Sign In' : 'Create Account'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {isLogin ? 'Welcome back to Karma' : 'Join the Karma community'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-karma-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-karma-purple focus:border-transparent"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-karma-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-karma-purple focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-karma-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-karma-purple focus:border-transparent"
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required={!isLogin}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-karma-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-karma-purple focus:border-transparent"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-karma-purple text-white py-2 px-4 rounded-md font-medium hover:bg-karma-purple/90 transition-colors"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white dark:bg-karma-gray border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-karma-gray/80 transition-colors"
          >
            Continue with Google
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-karma-purple hover:underline"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;