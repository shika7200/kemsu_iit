import React from 'react';
import styles from './ContentSection.module.scss';

import { ContentSectionProps } from '../types';
import { isHTML } from '@/utils';

const ContentSection: React.FC<ContentSectionProps> = ({ label, description }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.label}>{label}</h1>
      <div className={styles.contentWrapper}>
        {isHTML(description) ? (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <div className={styles.content}>
            {description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentSection;
