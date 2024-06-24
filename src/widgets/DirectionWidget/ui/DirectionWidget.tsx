import React from 'react';
import styles from './DirectionWidget.module.scss';
import { useDirection } from '../hooks';
import { Direction } from '../types';

const DirectionWidget: React.FC = () => {
  const {
    directions,
    selectedDirection,
    isModalOpen,
    handleDescriptionClick,
    handleCloseModal,
  } = useDirection();

  const bachelors = directions.filter(direction => !direction.Master);
  const masters = directions.filter(direction => direction.Master);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Образовательные программы</h1>
      <a href="https://eios.kemsu.ru/a/umu/IIT" target="_blank" rel="noopener noreferrer" className={styles.programsLink}>
        Перейти к образовательным программам
      </a>
      <h2 className={styles.subtitle}>Бакалавриат</h2>
      <ul className={styles.list}>
        {bachelors.map((direction: Direction) => (
          <li key={direction.id} className={styles.item}>
            <div
              onClick={() => handleDescriptionClick(direction)}
              className={styles.link}
            >
              {direction.direction}
            </div>
          </li>
        ))}
      </ul>
      <h2 className={styles.subtitle}>Магистратура</h2>
      <ul className={styles.list}>
        {masters.map((direction: Direction) => (
          <li key={direction.id} className={styles.item}>
            <div
              onClick={() => handleDescriptionClick(direction)}
              className={styles.link}
            >
              {direction.direction}
            </div>
          </li>
        ))}
      </ul>
      {isModalOpen && selectedDirection && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedDirection.direction}</h2>
            <div className={styles.modalContent}>
              <p>{selectedDirection.description}</p>
            </div>
            <button className={styles.closeButton} onClick={handleCloseModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectionWidget;
