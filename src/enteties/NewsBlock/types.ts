// src/shared/types/BlockProps.ts
export interface BlockProps {
    title: string;
    imgSrc: string;
    text: string;
    date: string;
  }
  

  export interface NewsBlockProps extends BlockProps {
    orientation: string;
  }
  