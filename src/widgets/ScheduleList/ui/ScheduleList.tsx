
import styles from './ScheduleList.module.scss';
import { useSchedules } from '../hooks';


const ScheduleList: React.FC = () => {
  const { schedules } = useSchedules();

  return (
    <div className={styles.container}>
      {schedules.map(schedule => (
        <div key={schedule.id} className={styles.schedule}>
          <h3>{schedule.name}</h3>
          {schedule.file ? (
            <a href={`https://mats-kemsu.pockethost.io/api/files/${schedule.collectionId}/${schedule.id}/${schedule.file}`} target="_blank" rel="noopener noreferrer" className={styles.button}>
              Открыть файл
            </a>
          ) : (
            <a href={schedule.link} target="_blank" rel="noopener noreferrer" className={styles.button}>
              Открыть ссылку
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;
