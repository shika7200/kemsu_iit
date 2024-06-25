import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { fetchHomeContent, fetchNews, fetchProfs } from '@/enteties';
import { Home, NewsBlockProps, Prof } from '@/enteties/Home/model/types';
import { HomeContentContextProps, HomeContentProviderProps } from './types';


const HomeContentContext = createContext<HomeContentContextProps | undefined>(undefined);




export const HomeContentProvider: React.FC<HomeContentProviderProps> = ({ children }) => {
  const [homeContent, setHomeContent] = useState<Home[]>([]);
  const [profs, setProfs] = useState<Prof[]>([]);
  const [news, setNews] = useState<NewsBlockProps[]>([]);

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

  useEffect(() => {
    fetchHomeContentCallback();
    fetchProfsCallback();
    fetchNewsCallback();
  }, [fetchHomeContentCallback, fetchProfsCallback, fetchNewsCallback]);

  return (
    <HomeContentContext.Provider value={{ homeContent, profs, news, fetchHomeContent: fetchHomeContentCallback, fetchProfs: fetchProfsCallback, fetchNews: fetchNewsCallback }}>
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