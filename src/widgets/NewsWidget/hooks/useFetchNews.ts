// src/hooks/useFetchNews.ts
import { useState, useEffect } from 'react';
import { fetchNews } from '../actions/fetchNews';
import localforage from 'localforage';

const CACHE_KEY = 'newsData';
const CACHE_DURATION = 1800000; // 30 минут в миллисекундах

const useFetchNews = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const cachedData = await localforage.getItem(CACHE_KEY);
        const cacheTime = await localforage.getItem(`${CACHE_KEY}_time`) as number | null;
        const now = new Date().getTime();

        if (cachedData && cacheTime && now - cacheTime < CACHE_DURATION) {
          setNews(cachedData as any[]); // Приведение типов
        } else {
          const newsData = await fetchNews();
          await localforage.setItem(CACHE_KEY, newsData);
          await localforage.setItem(`${CACHE_KEY}_time`, now);
          setNews(newsData);
        }
      } catch (error) {
        setError("Ошибка загрузки новостей");
        console.error("Error fetching news in useFetchNews:", error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  return { news, loading, error };
};

export default useFetchNews;
