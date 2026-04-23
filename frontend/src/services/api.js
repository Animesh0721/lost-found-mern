import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to request headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth APIs
export const register = (userData) => api.post('/auth/register', userData);
export const login = (credentials) => api.post('/auth/login', credentials);

// Item APIs
export const addItem = (itemData) => api.post('/items', itemData);
export const getAllItems = () => api.get('/items');
export const getItemById = (id) => api.get(`/items/${id}`);
export const updateItem = (id, itemData) => api.put(`/items/${id}`, itemData);
export const deleteItem = (id) => api.delete(`/items/${id}`);
export const searchItems = (query) => api.get(`/items/search?name=${query}`);
