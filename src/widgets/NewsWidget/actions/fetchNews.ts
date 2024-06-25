// src/actions/fetchNews.ts
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

export const fetchNews = async () => {
  try {
    // Выполняем авторизацию
    await pb.admins.authWithPassword('kemsu-mats@tutamail.com', '5@tINh26!!');

    const records = await pb.collection('news').getFullList({
      sort: '-created',
    });

    // Проверяем ориентацию изображения для каждой новости
    const newsWithOrientation = await Promise.all(
      records.map(async (newsItem) => {
        const imgSrc = `https://mats-kemsu.pockethost.io/api/files/${newsItem.collectionId}/${newsItem.id}/${newsItem.image}`;
        const orientation = await getImageOrientation(imgSrc);
        return { ...newsItem, orientation };
      })
    );

    console.log('Fetched news with orientation:', newsWithOrientation); // Логируем данные
    return newsWithOrientation;
  } catch (error) {
    console.error('Error fetching news:', error); // Логируем ошибку
    throw error;
  }
};
