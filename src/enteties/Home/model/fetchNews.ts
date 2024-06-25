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

 const fetchNews = async (): Promise<NewsBlockProps[]> => {
  try {
    // Выполняем авторизацию
    await pb.admins.authWithPassword('kemsu-mats@tutamail.com', '5@tlNh26');

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
          title: newsItem.title,
          image: newsItem.image,
          imgSrc: imgSrc,
          text: newsItem.text,
          date: newsItem.date,
          orientation: orientation
        };
      })
    );

    console.log('Fetched news with orientation:', newsWithOrientation); // Логируем данные
    return newsWithOrientation;
  } catch (error) {
    console.error('Error fetching news:', error); // Логируем ошибку
    throw error;
  }
};
export default fetchNews;