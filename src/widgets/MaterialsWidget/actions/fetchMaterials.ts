import PocketBase from 'pocketbase';
import { Material } from '../types';

const pb = new PocketBase('https://mats-kemsu.pockethost.io');
pb.autoCancellation(false);

const CACHE_KEY = 'materials_cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 минут в миллисекундах

export const fetchMaterials = async (): Promise<Material[]> => {
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
    const result = await pb.collection('materials').getList(1, 50, {
      filter: 'created >= "2022-01-01 00:00:00"',
      sort: '-created',
    });
    const materials = result.items.map((item: any) => {
      const directionText = item.direction.split(' направленность')[0];
      return {
        id: item.id,
        collectionId: item.collectionId,
        collectionName: item.collectionName,
        created: item.created,
        updated: item.updated,
        direction: directionText,
        link: item.link,
      };
    });

    // Сохранение данных в кэш
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: materials, timestamp: new Date().getTime() }));

    return materials;
  } catch (error) {
    console.error('Error fetching materials:', error);
    return [];
  }
};
