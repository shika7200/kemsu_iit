import { useRouter } from "next/router";
import styles from './MenuItem.module.scss';

interface MenuItemProps {
  text: string;
  className?: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, className = '', href }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${className}`}
    >
      {text}
    </button>
  );
};

export default MenuItem;
