import React, { useEffect } from 'react';
import styles from './MaterialsWidget.module.scss';
import { useMaterials } from '../hooks';
import { Material } from '../types';

const MaterialsWidget: React.FC = () => {
  const { materials, fetchMaterials } = useMaterials();

  useEffect(() => {
    fetchMaterials();
  }, [fetchMaterials]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Методические материалы</h1>
      <ul className={styles.list}>
        {materials.map((material: Material) => (
          <li key={material.id} className={styles.item}>
            <a href={material.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {material.direction}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaterialsWidget;
