import PocketBase from 'pocketbase';
import { Schedule } from '../types';

const pb = new PocketBase('https://mats-kemsu.pockethost.io');
pb.autoCancellation(false);

const CACHE_KEY = 'schedules_cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 минут в миллисекундах

export const fetchSchedules = async (): Promise<Schedule[]> => {
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
    const result = await pb.collection('schedules').getFullList({
      sort: '-created',
    });
    const schedules = result.map((item: any) => ({
      id: item.id,
      collectionId: item.collectionId,
      collectionName: item.collectionName,
      created: item.created,
      updated: item.updated,
      name: item.name,
      file: item.file,
      link: item.link,
    }));

    // Сохранение данных в кэш
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: schedules, timestamp: new Date().getTime() }));

    return schedules;
  } catch (error) {
    console.error('Error fetching schedules:', error);
    return [];
  }
};
