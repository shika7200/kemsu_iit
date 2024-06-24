import styles from './ProfsWidget.module.scss';
import { useFetchProfs } from '../hooks';
import { ProfBlock } from '@/enteties';

const ProfsWidget: React.FC = () => {
  const { profs, loading, error, isAuthorized } = useFetchProfs();

  if (loading) {
    return (
      <div className={styles.main}>
        <p>Загрузка...</p>
      </div>
    );
  }

  if (error) {
    console.error("Error in ProfsWidget component:", error);
    return (
      <div className={styles.main}>
        <p>Ошибка загрузки данных о преподавателях</p>
      </div>
    );
  }

  console.log("Rendering ProfsWidget with profs:", profs);

  return (
    <div className={styles.main}>
      {profs.map((prof) => (
        <ProfBlock
          key={prof.id}
          avatar={`https://mats-kemsu.pockethost.io/api/files/${prof.collectionId}/${prof.id}/${prof.avatar}`}
          surname={prof.surname}
          name={prof.name}
          fathername={prof.fathername}
          status={prof.status}
          phone={prof.phone}
          mail={prof.mail}
          description={prof.description}
          orientation={prof.orientation}
          isAuthorized={isAuthorized} 
        />
      ))}
    </div>
  );
};

export default ProfsWidget;
