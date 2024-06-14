// src/hooks/useFetchNews.ts
import { useState, useEffect } from 'react';
import { fetchNews } from '../actions/fetchNews';

const useFetchNews = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNews();
        console.log('Fetched news data in useFetchNews:', newsData); // Логируем данные
        setNews(newsData);
      } catch (error) {
        setError("Ошибка загрузки новостей");
        console.error("Error fetching news in useFetchNews:", error); // Логируем ошибку
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  return { news, loading, error };
};

export default useFetchNews;
