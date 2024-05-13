import { HeadingProps } from "../types";
import styles from "./Heading.module.scss"

const Heading: React.FC<HeadingProps> = ({ text }) => (
    <h2 className={styles.heading}>{text}</h2>
  );

  export default Heading;