import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
  // Add any other user-specific data relevant to e-commerce
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  // Optionally, add a function to register a new user
  // register: (userData: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Simulate checking for an existing session (e.g., from localStorage, cookie, or API call)
    const checkSession = async () => {
      setLoading(true);
      try {
        // In a real app, you'd fetch user data from your backend
        // For now, simulate a successful session if a 'dummy_token' exists
        const storedToken = localStorage.getItem('ecommerce_auth_token');
        if (storedToken) {
          // Simulate fetching user details with the token
          const dummyUser: User = { id: 'user-123', email: 'test@example.com', name: 'E-commerce User' };
          setUser(dummyUser);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Failed to check session:', error);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const login = async (credentials: { email: string; password: string }) => {
    setLoading(true);
    try {
      // Simulate API call for login
      // Replace with actual API integration (e.g., axios.post('/api/login', credentials))
      if (credentials.email === 'test@example.com' && credentials.password === 'password123') {
        const loggedInUser: User = { id: 'user-123', email: credentials.email, name: 'E-commerce User' };
        setUser(loggedInUser);
        setIsAuthenticated(true);
        localStorage.setItem('ecommerce_auth_token', 'dummy_jwt_token_123'); // Store token
        console.log('Login successful');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setUser(null);
      setIsAuthenticated(false);
      throw error; // Re-throw to allow components to handle login errors
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      // Simulate API call for logout or clear local storage
      localStorage.removeItem('ecommerce_auth_token');
      setUser(null);
      setIsAuthenticated(false);
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
