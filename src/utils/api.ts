// utils/api.ts
import axios from 'axios';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import refreshToken from './auth';


const api = axios.create({
  baseURL: 'https://mats-kemsu.pockethost.io',
});

api.interceptors.request.use(async (config) => {
  let token: string | undefined = Cookies.get('access_token'); // Берем токен из куки
  if (token) {
    try {
      const decodedToken: any = jwt.decode(token);
      const currentTime = new Date().getTime() / 1000;

      if (decodedToken.exp < currentTime) {
        const newToken = await refreshToken();
        if (newToken) {
          token = newToken;
          config.headers.Authorization = `Bearer ${newToken}`;
        } else {
          // If token couldn't be refreshed, redirect to login
          window.location.href = '/login';
          return Promise.reject(new Error('Session expired. Please log in again.'));
        }
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Failed to decode token', error);
    }
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
