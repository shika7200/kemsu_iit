// src/services/newsService.ts
import localforage from 'localforage';
import fetchNews from '../actions';


const CACHE_KEY = 'newsData';
const CACHE_DURATION = 1800000; // 30 минут в миллисекундах

const getNews = async () => {
  const cachedData = await localforage.getItem(CACHE_KEY);
  const cacheTime = await localforage.getItem(`${CACHE_KEY}_time`) as number | null;

  const now = new Date().getTime();
  if (cachedData && cacheTime && now - cacheTime < CACHE_DURATION) {
    return cachedData;
  }

  const newsData = await fetchNews();
  await localforage.setItem(CACHE_KEY, newsData);
  await localforage.setItem(`${CACHE_KEY}_time`, now);

  return newsData;
};

export default getNews;
