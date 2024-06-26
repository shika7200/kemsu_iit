import { Home, NewsBlockProps, Prof, Contact, Direction } from "@/enteties/Home/model/types";
import { ReactNode } from "react";

export type HomeContentContextProps = {
  homeContent: Home[];
  profs: Prof[];
  news: NewsBlockProps[];
  contacts: Contact[];
  directions: Direction[];
  fetchHomeContent: () => Promise<void>;
  fetchProfs: () => Promise<void>;
  fetchNews: () => Promise<void>;
  fetchContacts: () => Promise<void>;
  fetchDirections: () => Promise<void>;
};

export type HomeContentProviderProps = {
  children: ReactNode;
};