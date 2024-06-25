export type Home =  {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    label: string;
    description: string;
  }

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
  }



  export type NewsBlockProps = {
    id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  image: string;
  text: string;
  date: string;
  orientation: string;
  imgSrc: string;
  }

  export type Contact  ={
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    name: string;
    address: string;
    phone: string;
    mail: string;
  }
  