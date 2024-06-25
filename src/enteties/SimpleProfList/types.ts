// types.ts
export type Prof = {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    avatar: string;
    surname: string;
    name: string;
    fathername: string;
    status: string;
    phone: string;
    mail: string;
    description: string;
    orientation: string;
  };
  
  export type SimpleProfListProps = {
    profs: Prof[];
  };
  