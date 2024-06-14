import React, { useState } from 'react';
import { BlockProps } from '../types';
import styles from './NewsBlock.module.scss';

interface NewsBlockProps extends BlockProps {
  orientation: string;
}

const NewsBlock: React.FC<NewsBlockProps> = ({ title, imgSrc, text, date, orientation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.news_text}>{title}</h2>
      <article className={`${styles.article} ${orientation === 'landscape' ? styles.landscape : ''}`}>
        <div className={styles.div_img}>
          <img
            loading="lazy"
            src={imgSrc}
            alt=""
            className={`${styles.img} ${orientation === 'landscape' ? styles['img-landscape'] : styles['img-portrait']}`}
            onClick={handleImageClick}
          />
          <div className={styles.text_container}>
            {text}
          </div>
        </div>
        <time className="mt-2 ml-11">{date}</time>
      </article>
      {isModalOpen && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modal_content}>
            <img src={imgSrc} alt="" className={styles.modal_img} onClick={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsBlock;
