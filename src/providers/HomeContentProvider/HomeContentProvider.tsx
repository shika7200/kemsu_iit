import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { fetchHomeContent, fetchNews, fetchProfs, fetchContacts, fetchDirections } from '@/enteties';
import { HomeContentContextProps, HomeContentProviderProps } from './types';
import { Contact, Direction, Home, NewsBlockProps, Prof } from '@/enteties/Home/model/types';

const HomeContentContext = createContext<HomeContentContextProps | undefined>(undefined);

export const HomeContentProvider: React.FC<HomeContentProviderProps> = ({ children }) => {
  const [homeContent, setHomeContent] = useState<Home[]>([]);
  const [profs, setProfs] = useState<Prof[]>([]);
  const [news, setNews] = useState<NewsBlockProps[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [directions, setDirections] = useState<Direction[]>([]);

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
      setContacts(fetchedContacts);
    } catch (error) {
      console.error('Ошибка при загрузке контактов:', error);
    }
  }, []);

  const fetchDirectionsCallback = useCallback(async () => {
    try {
      const fetchedDirections = await fetchDirections();
      setDirections(fetchedDirections);
    } catch (error) {
      console.error('Ошибка при загрузке направлений:', error);
    }
  }, []);

  useEffect(() => {
    fetchHomeContentCallback();
    fetchProfsCallback();
    fetchNewsCallback();
    fetchContactsCallback();
    fetchDirectionsCallback();
  }, [fetchHomeContentCallback, fetchProfsCallback, fetchNewsCallback, fetchContactsCallback, fetchDirectionsCallback]);

  return (
    <HomeContentContext.Provider value={{
      homeContent,
      profs,
      news,
      contacts,
      directions,
      fetchHomeContent: fetchHomeContentCallback,
      fetchProfs: fetchProfsCallback,
      fetchNews: fetchNewsCallback,
      fetchContacts: fetchContactsCallback,
      fetchDirections: fetchDirectionsCallback
    }}>
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
