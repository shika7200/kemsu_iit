// SimpleProfList.tsx
import React from 'react';
import styles from './SimpleProfList.module.scss'; // Подтвердите, что стили правильно подключены
import { SimpleProfListProps } from '../types'; // Подтвердите, что путь до типов корректен

const SimpleProfList: React.FC<SimpleProfListProps> = ({ profs }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Сотрудники</h2>
      <ul className={styles.list}>
        {profs.map((prof, index) => (
          <li key={prof.id} className={styles.item}>
            {index + 1}. {prof.surname} {prof.name} {prof.fathername} - {prof.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleProfList;
