import { Home, Prof } from "@/enteties/Home/model/types";
import { ReactNode } from "react";

export type HomeContentContextProps  ={
    homeContent: Home[];
    profs: Prof[];
    fetchHomeContent: () => void;
    fetchProfs: () => void; }

 export type HomeContentProviderProps = {
        children: ReactNode;
      }