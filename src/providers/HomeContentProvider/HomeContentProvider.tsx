import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { fetchHomeContent, fetchProfs } from '@/enteties';
import { Home, Prof } from '@/enteties/Home/model/types';
import { HomeContentContextProps, HomeContentProviderProps } from './types';


const HomeContentContext = createContext<HomeContentContextProps | undefined>(undefined);



 const HomeContentProvider: React.FC<HomeContentProviderProps> = ({ children }) => {
  const [homeContent, setHomeContent] = useState<Home[]>([]);
  const [profs, setProfs] = useState<Prof[]>([]);

  const fetchHomeContentCallback = useCallback(async () => {
    const fetchedHomeContent = await fetchHomeContent();
    setHomeContent(fetchedHomeContent);
  }, []);

  const fetchProfsCallback = useCallback(async () => {
    const fetchedProfs = await fetchProfs();
    setProfs(fetchedProfs);
  }, []);

  useEffect(() => {
    fetchHomeContentCallback();
    fetchProfsCallback();
  }, [fetchHomeContentCallback, fetchProfsCallback]);

  return (
    <HomeContentContext.Provider value={{ homeContent, profs, fetchHomeContent: fetchHomeContentCallback, fetchProfs: fetchProfsCallback }}>
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

export default HomeContentProvider;