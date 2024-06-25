import PocketBase from 'pocketbase';
import { NewsBlockProps } from './types';

const pb = new PocketBase('https://mats-kemsu.pockethost.io');

// Глобально отключаем автоотмену
pb.autoCancellation(false);

const getImageOrientation = async (imgSrc: string): Promise<string> => {
  const img = new Image();
  img.src = imgSrc;

  return new Promise((resolve) => {
    img.onload = () => {
      if (img.width >= img.height) {
        resolve('landscape'); // Альбомная ориентация
      } else {
        resolve('portrait'); // Портретная ориентация
      }
    };
  });
};

const CACHE_KEY_NEWS = 'news_data_cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 минут

const fetchNews = async (): Promise<NewsBlockProps[]> => {
  // Проверка наличия кэша
  const cachedData = localStorage.getItem(CACHE_KEY_NEWS);
  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    const now = new Date().getTime();
    // Проверка, не устарели ли кэшированные данные
    if (now - timestamp < CACHE_DURATION) {
      console.log('Returning cached news data');
      return data;
    }
  }

  try {
    // Выполняем авторизацию
    await pb.admins.authWithPassword('kemsu-mats@tutamail.com', '5@tINh26!!');
    const records = await pb.collection('news').getFullList({
      sort: '-created',
    });

    // Проверяем ориентацию изображения для каждой новости
    const newsWithOrientation: NewsBlockProps[] = await Promise.all(
      records.map(async (newsItem: any): Promise<NewsBlockProps> => {
        const imgSrc = `https://mats-kemsu.pockethost.io/api/files/${newsItem.collectionId}/${newsItem.id}/${newsItem.image}`;
        const orientation = await getImageOrientation(imgSrc);
        return {
          id: newsItem.id,
          collectionId: newsItem.collectionId,
          collectionName: newsItem.collectionName,
          created: newsItem.created,
          updated: newsItem.updated,
          title: newsItem.article,
          image: newsItem.image,
          imgSrc: imgSrc,
          text: newsItem.text,
          date: newsItem.date,
          orientation: orientation
        };
      })
    );

    console.log('Fetched news with orientation:', newsWithOrientation); // Логируем данные

    // Сохранение данных в кэш
    localStorage.setItem(CACHE_KEY_NEWS, JSON.stringify({
      data: newsWithOrientation,
      timestamp: new Date().getTime()
    }));

    return newsWithOrientation;
  } catch (error) {
    console.error('Error fetching news:', error); // Логируем ошибку
    throw error;
  }
};

export default fetchNews;
