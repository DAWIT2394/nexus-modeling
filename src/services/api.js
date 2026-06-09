import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Uses proxy (package.json: "proxy": "http://localhost:5000")
  timeout: 30000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  
  // Automatically set correct Content-Type
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }
  return config;
});

// Registration endpoint – match your backend route
export const registerStudent = async (formData) => {
  return api.post('students/register', formData);
};

export const loginAdmin = async (email, password) => {
  return api.post('/auth/login', { email, password });
};

export const getCourses = async () => {
  return api.get('/courses');
};

export const getGallery = async () => {
  return api.get('/gallery');
};

export const getStudents = async () => {
  return api.get('/students');
};

export default api;