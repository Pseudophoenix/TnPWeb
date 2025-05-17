import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  console.log(userData);
  if (response.data) {
    console.log(response.data);
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  
  return response.data;
};

// Login user
const login = async (userData) => {
  console.log('Called Lon');
  console.log(userData);
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, userData);
    
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

// Get logged in user
const getMe = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/me`, config);
  return response.data;
};

const authService = {
  register,
  login,
  logout,
  getMe,
};

export default authService;