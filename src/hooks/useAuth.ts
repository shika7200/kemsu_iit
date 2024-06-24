// hooks/useAuth.ts
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import {refreshToken} from '../utils/auth';


const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get('access_token'); // Обновим, чтобы использовать 'access_token'
      if (token) {
        try {
          const decodedToken: any = jwt.decode(token);
          const currentTime = new Date().getTime() / 1000;

          if (decodedToken.exp < currentTime) {
            const newToken = await refreshToken();
            if (newToken) { // Добавим проверку, чтобы убедиться, что newToken не null
              const newDecodedToken: any = jwt.decode(newToken);
              if (newDecodedToken.exp > currentTime) {
                setIsAuthenticated(true);
              } else {
                setIsAuthenticated(false);
                router.push('/login');
              }
            } else {
              setIsAuthenticated(false);
              router.push('/login');
            }
          } else {
            setIsAuthenticated(true);
            router.push('/');
          }
        } catch (error) {
          setIsAuthenticated(false);
          router.push('/login');
        }
      } else {
        setIsAuthenticated(false);
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  return isAuthenticated;
};

export default useAuth;
