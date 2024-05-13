import { InputProps } from "../types";
import styles from "./Input.module.scss"

const Input: React.FC<InputProps> = ({ placeholder }) => (
    <div className={styles.div}>
      <input placeholder={placeholder} className={styles.input}/>
    </div>
  );

  export default Input;