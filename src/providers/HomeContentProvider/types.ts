import { Home, NewsBlockProps, Prof } from "@/enteties/Home/model/types";
import { ReactNode } from "react";

export type HomeContentContextProps  ={
  homeContent: Home[];
  profs: Prof[];
  news: NewsBlockProps[];
  fetchHomeContent: () => void;
  fetchProfs: () => void;
  fetchNews: () => void;}

 export type HomeContentProviderProps = {
        children: ReactNode;
      }