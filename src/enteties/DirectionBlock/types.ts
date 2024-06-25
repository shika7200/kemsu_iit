export type Direction = {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    direction: string;
    link: string;
    description: string;
    Master: boolean;
  }
  

export type DirectionBlockProps ={
    
    direction: Direction;
    onDescriptionClick: (direction: Direction) => void;
    isModalOpen: boolean;
    closeModal: () => void;
    selectedDirection: Direction | null;
  }