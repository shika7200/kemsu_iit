import React from 'react';
import styles from './Menu.module.scss';
import { MenuProps } from '../types';


const Menu: React.FC<MenuProps> = ({ onClick }) => (
  <nav className={styles.nav} onClick={onClick}>
    <div className={styles.menuTitle}>Меню</div>
    <div className={styles.menuIcon}>
      <div className={styles.menuIconLine} />
      <div className={styles.menuIconLine} />
      <div className={styles.menuIconLine} />
    </div>
  </nav>
);

export default Menu;
