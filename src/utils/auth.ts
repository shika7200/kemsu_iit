
import axios from 'axios';
import Cookies from 'js-cookie';

 export const refreshToken = async (): Promise<string | null> => {
  try {
    const response = await axios.post('/api/refresh-token');
    Cookies.set('access_token', response.data.token, { expires: 1 / 24, sameSite: 'Strict' }); // 1 hour
    return response.data.token;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    return null;
  }
};
