import { useState, useEffect } from 'react';
import localforage from 'localforage';
import { isUserAuthenticated } from '@/utils';
import { fetchProfs } from '../actions';

const CACHE_KEY = 'profsData';
const CACHE_DURATION = 1800000; // 30 минут в миллисекундах


const useFetchProfs = () => {
  const [profs, setProfs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    const getProfs = async () => {
      try {
        const cachedData = await localforage.getItem(CACHE_KEY);
        const cacheTime = await localforage.getItem(`${CACHE_KEY}_time`) as number | null;
        const now = new Date().getTime();

        if (cachedData && cacheTime && now - cacheTime < CACHE_DURATION) {
          setProfs(cachedData as any[]);
        } else {
          const profsData = await fetchProfs();
          await localforage.setItem(CACHE_KEY, profsData);
          await localforage.setItem(`${CACHE_KEY}_time`, now);
          setProfs(profsData);
        }
      } catch (error) {
        setError("Ошибка загрузки данных о преподавателях");
        console.error("Error fetching profs in useFetchProfs:", error);
      } finally {
        setLoading(false);
      }
    };

    const authStatus = isUserAuthenticated();
    setIsAuthorized(authStatus);

    getProfs();
  }, []);

  return { profs, loading, error, isAuthorized };
};

export default useFetchProfs;
