import { HeadingProps } from "../types";
import styles from "./Heading.module.scss"

const Heading: React.FC<HeadingProps> = ({ text }) => (
    <p className={styles.Heading}>{text}</p>
  );

  export default Heading;