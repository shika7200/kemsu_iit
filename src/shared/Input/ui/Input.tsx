import { InputProps } from "../types";
import styles from "./Input.module.scss"

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, type = "text", name }) => {
    return (
        <div className={styles.div}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
      />
      </div>
    );
  };
  
  export default Input;