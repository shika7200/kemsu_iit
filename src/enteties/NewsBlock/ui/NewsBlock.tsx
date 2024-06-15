import React from 'react';
import { NewsBlockProps } from '../types';
import { useModal } from '../hooks/useModal';
import styles from './NewsBlock.module.scss';

const NewsBlock: React.FC<NewsBlockProps> = ({ title, imgSrc, text, date, orientation }) => {
  const { isModalOpen, handleImageClick, handleCloseModal, closeModal } = useModal();

  return (
    <section className={styles.section}>
      <h4 className={styles.news_text}>{title}</h4>
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
        <time className={styles.time}>{date}</time>
      </article>
      {isModalOpen && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modal_content}>
            <img src={imgSrc} alt="" className={styles.modal_img} onClick={closeModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsBlock;
