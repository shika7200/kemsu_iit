import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Получаем текущий год

  return (
    <footer className={styles.footer}>
      © КемГУ, 1997–{currentYear}
    </footer>
  );
}

export default Footer;
