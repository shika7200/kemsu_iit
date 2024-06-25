import PocketBase from 'pocketbase';
import { Contact } from './types';


const pb = new PocketBase('https://mats-kemsu.pockethost.io');
pb.autoCancellation(false);

const CACHE_KEY = 'contacts_cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 минут в миллисекундах

 const fetchContacts = async (): Promise<Contact[]> => {
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
    const result = await pb.collection('contacts').getFullList({
      sort: '-created',
    });
    const contacts = result.map((item: any) => ({
      id: item.id,
      collectionId: item.collectionId,
      collectionName: item.collectionName,
      created: item.created,
      updated: item.updated,
      name: item.name,
      address: item.address || item.adress,  // Убедимся, что оба варианта работают
      phone: item.phone,
      mail: item.mail,
    }));

    // Сохранение данных в кэш
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: contacts, timestamp: new Date().getTime() }));

    return contacts;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
};

export default fetchContacts;