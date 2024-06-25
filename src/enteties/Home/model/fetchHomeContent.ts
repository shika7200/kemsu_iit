import PocketBase from 'pocketbase';
import { Home } from './types';

const pb = new PocketBase('https://mats-kemsu.pockethost.io');
pb.autoCancellation(false);

const CACHE_KEY = 'home_content_cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 минут в миллисекундах

 const fetchHomeContent = async (): Promise<Home[]> => {
  // Проверка наличия кэша
  const cachedData = localStorage.getItem(CACHE_KEY);
  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    const now = new Date().getTime();

    // Проверка, не устарели ли кэшированные данные
    if (now - timestamp < CACHE_DURATION) {
      return data;
    }
  }

  // Если кэша нет или он устарел, загружаем данные заново
  try {
    await pb.admins.authWithPassword('kemsu-mats@tutamail.com', '5@tINh26!!');
    const result = await pb.collection('home').getFullList({
      sort: '-created',
    });
    const homeContent = result.map((item: any) => ({
      id: item.id,
      collectionId: item.collectionId,
      collectionName: item.collectionName,
      created: item.created,
      updated: item.updated,
      label: item.label,
      description: item.description,
    }));

    // Сохранение данных в кэш
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: homeContent, timestamp: new Date().getTime() }));

    return homeContent;
  } catch (error) {
    console.error('Error fetching home content:', error);
    return [];
  }
};
export default fetchHomeContent;