import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProjects = () => api.get('/projects');
export const getBlogPosts = () => api.get('/blog');
export const sendContactMessage = (data) => api.post('/contact', data);

export default api; 