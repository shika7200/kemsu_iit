import styles from './DirectionWidget.module.scss';
import { useDirection } from '../hooks';
import { DirectionBlock } from '@/enteties';


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
        {bachelors.map((direction) => (
          <DirectionBlock
            key={direction.id}
            direction={direction}
            onDescriptionClick={handleDescriptionClick}
            isModalOpen={isModalOpen}
            closeModal={handleCloseModal}
            selectedDirection={selectedDirection}
          />
        ))}
      </ul>
      <h2 className={styles.subtitle}>Магистратура</h2>
      <ul className={styles.list}>
        {masters.map((direction) => (
          <DirectionBlock
            key={direction.id}
            direction={direction}
            onDescriptionClick={handleDescriptionClick}
            isModalOpen={isModalOpen}
            closeModal={handleCloseModal}
            selectedDirection={selectedDirection}
          />
        ))}
      </ul>
    </div>
  );
};

export default DirectionWidget;
