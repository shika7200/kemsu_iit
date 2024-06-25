import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { fetchHomeContent, fetchNews, fetchProfs, fetchContacts } from '@/enteties';  // Добавлен импорт fetchContacts
import { Home, NewsBlockProps, Prof, Contact } from '@/enteties/Home/model/types';
import { HomeContentContextProps, HomeContentProviderProps } from './types';

const HomeContentContext = createContext<HomeContentContextProps | undefined>(undefined);

export const HomeContentProvider: React.FC<HomeContentProviderProps> = ({ children }) => {
  const [homeContent, setHomeContent] = useState<Home[]>([]);
  const [profs, setProfs] = useState<Prof[]>([]);
  const [news, setNews] = useState<NewsBlockProps[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);  // Добавлено состояние для контактов

  const fetchHomeContentCallback = useCallback(async () => {
    const fetchedHomeContent = await fetchHomeContent();
    setHomeContent(fetchedHomeContent);
  }, []);

  const fetchProfsCallback = useCallback(async () => {
    const fetchedProfs = await fetchProfs();
    setProfs(fetchedProfs);
  }, []);

  const fetchNewsCallback = useCallback(async () => {
    const fetchedNews = await fetchNews();
    setNews(fetchedNews);
  }, []);

  const fetchContactsCallback = useCallback(async () => {
    try {
      const fetchedContacts = await fetchContacts();
      console.log(fetchedContacts);  // Проверьте, что данные приходят
      setContacts(fetchedContacts);
    } catch (error) {
      console.error('Ошибка при загрузке контактов:', error);
    }
  }, []);
  

  useEffect(() => {
    fetchHomeContentCallback();
    fetchProfsCallback();
    fetchNewsCallback();
    fetchContactsCallback();
  }, [fetchHomeContentCallback, fetchProfsCallback, fetchNewsCallback, fetchContactsCallback]);

  return (
    <HomeContentContext.Provider value={{ homeContent, profs, news, contacts, fetchHomeContent: fetchHomeContentCallback, fetchProfs: fetchProfsCallback, fetchNews: fetchNewsCallback, fetchContacts: fetchContactsCallback }}>
      {children}
    </HomeContentContext.Provider>
  );
};

export const useHomeContent = () => {
  const context = useContext(HomeContentContext);
  if (!context) {
    throw new Error('useHomeContent must be used within a HomeContentProvider');
  }
  return context;
};
