/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { LogoProps } from '../types';
import styles from './Logo.module.scss';

const Logo: React.FC<LogoProps> = ({ alt }) => (
  <img
    src="/icon.jpg" 
    alt={alt}      
    className={styles.logo} 
  />
);

export default Logo;
