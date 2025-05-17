import { createContext, useContext, useEffect, useState } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const storedUser = localStorage.getItem('user');
      console.log(`${storedUser}----------`);
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        try {
          const userData = await authService.getMe(parsedUser.token);
          setUser({ ...parsedUser, ...userData });
        } catch (error) {
          // logout();
          console.log(error);
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const register = async (userData) => {
    console.log(userData);
    // print(userData);
    const response = await authService.register(userData);
    setUser(response);
    return response;
  };

  const login = async (userData) => {
    console.log('Called Login@');
    const response = await authService.login(userData);
    console.log('Called Login@');
    console.log(response);
    setUser(response);
    return response;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);