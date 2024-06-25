import PocketBase from 'pocketbase';
import { Prof } from './types';


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


pb.autoCancellation(false);
const CACHE_KEY_PROF = 'prof_data_cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 минут

const fetchProfs = async (): Promise<Prof[]> => {
  const cachedData = localStorage.getItem(CACHE_KEY_PROF);
  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    const now = new Date().getTime();
    if (now - timestamp < CACHE_DURATION) {
      return data;
    }
  }

  try {
    await pb.admins.authWithPassword('kemsu-mats@tutamail.com', '5@tINh26!!');
    const records = await pb.collection('profs').getFullList({ sort: '-created' });
    const profsWithOrientation = await Promise.all(
      records.map(async (prof: any) => {
        const imgSrc = `https://mats-kemsu.pockethost.io/api/files/${prof.collectionId}/${prof.id}/${prof.avatar}`;
        const orientation = await getImageOrientation(imgSrc);
        return { ...prof, orientation };
      })
    );

    localStorage.setItem(CACHE_KEY_PROF, JSON.stringify({ data: profsWithOrientation, timestamp: new Date().getTime() }));
    return profsWithOrientation;
  } catch (error) {
    console.error('Error fetching profs:', error);
    throw error;
  }
};

export default fetchProfs;
