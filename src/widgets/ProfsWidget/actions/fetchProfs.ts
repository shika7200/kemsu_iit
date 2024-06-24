// src/actions/fetchProfs.ts
import PocketBase from 'pocketbase';

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

export const fetchProfs = async () => {
  try {
    
    await pb.admins.authWithPassword('kemsu-mats@tutamail.com', '5@tlNh26');

    const records = await pb.collection('profs').getFullList({
      sort: '-created',
    });

    // Проверяем ориентацию изображения для каждого преподавателя
    const profsWithOrientation = await Promise.all(
      records.map(async (prof) => {
        const imgSrc = `https://mats-kemsu.pockethost.io/api/files/${prof.collectionId}/${prof.id}/${prof.avatar}`;
        const orientation = await getImageOrientation(imgSrc);
        return { ...prof, orientation };
      })
    );

   
    return profsWithOrientation;
  } catch (error) {
    console.error('Error fetching profs:', error); // Логируем ошибку
    throw error;
  }
};
