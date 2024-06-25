import React from 'react';
import styles from './DirectionBlock.module.scss';
import { DirectionBlockProps } from '../types';


const DirectionBlock: React.FC<DirectionBlockProps> = ({
    direction,
    onDescriptionClick,
    isModalOpen,
    closeModal,
    selectedDirection
  }) => {
    return (
      <>
        <li className={styles.blockItem}>
          <div
            onClick={() => onDescriptionClick(direction)}
            className={styles.blockLink}
          >
            {direction.direction}
          </div>
        </li>
  
        {isModalOpen && selectedDirection?.id === direction.id && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <h2>{selectedDirection.direction}</h2>
              <div className={styles.modalContent}>
                <p>{selectedDirection.description}</p>
              </div>
              <button className={styles.closeButton} onClick={closeModal}>Закрыть</button>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default DirectionBlock;