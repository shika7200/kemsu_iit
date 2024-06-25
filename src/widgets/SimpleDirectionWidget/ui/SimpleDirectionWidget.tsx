import React from 'react';
import styles from './SimpleDirectionWidget.module.scss';
import { SimpleDirectionWidgetProps } from '../types';



const SimpleDirectionWidget: React.FC<SimpleDirectionWidgetProps> = ({ bachelors, masters }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Образовательные программы</h1>
      <h2 className={styles.subtitle}>Бакалавриат</h2>
      <ul className={styles.list}>
        {bachelors.map(direction => (
          <li key={direction.id} className={styles.item}>{direction.direction}</li>
        ))}
      </ul>
      <h2 className={styles.subtitle}>Магистратура</h2>
      <ul className={styles.list}>
        {masters.map(direction => (
          <li key={direction.id} className={styles.item}>{direction.direction}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleDirectionWidget;
