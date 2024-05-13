import { LogoProps } from "../types";
import styles from "./Logo.module.scss"

const Logo: React.FC<LogoProps> = ({ src, alt }) => (
    <img loading="lazy" src={src} alt={alt} className={styles.logo} />
  );
  
export default Logo;