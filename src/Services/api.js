import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'localhost:3333',
  headers: { Authentication: `Bearer ${Cookies.get('jwt-token')}` },
});

export default api;
