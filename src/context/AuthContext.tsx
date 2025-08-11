import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('karma-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    if (email === 'admin@karma.com' && password === 'admin123') {
      const adminUser = {
        id: '1',
        email: 'admin@karma.com',
        name: 'Admin',
        isAdmin: true
      };
      setUser(adminUser);
      localStorage.setItem('karma-user', JSON.stringify(adminUser));
      return true;
    }
    
    if (email && password) {
      const regularUser = {
        id: '2',
        email,
        name: email.split('@')[0],
        isAdmin: false
      };
      setUser(regularUser);
      localStorage.setItem('karma-user', JSON.stringify(regularUser));
      return true;
    }
    
    return false;
  };

  const loginWithGoogle = async (): Promise<boolean> => {
    // Simulate Google login
    const googleUser = {
      id: '3',
      email: 'user@gmail.com',
      name: 'Google User',
      isAdmin: false
    };
    setUser(googleUser);
    localStorage.setItem('karma-user', JSON.stringify(googleUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('karma-user');
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    // Simulate registration
    if (email && password && name) {
      const newUser = {
        id: Date.now().toString(),
        email,
        name,
        isAdmin: false
      };
      setUser(newUser);
      localStorage.setItem('karma-user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};