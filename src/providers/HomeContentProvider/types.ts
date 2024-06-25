import { Home, NewsBlockProps, Prof, Contact } from "@/enteties/Home/model/types";
import { ReactNode } from "react";

export type HomeContentContextProps = {
  homeContent: Home[];
  profs: Prof[];
  news: NewsBlockProps[];
  contacts: Contact[]; // Добавляем массив контактов
  fetchHomeContent: () => void;
  fetchProfs: () => void;
  fetchNews: () => void;
  fetchContacts: () => void; // Добавляем функцию для обновления контактов
};

export type HomeContentProviderProps = {
  children: ReactNode;
};
