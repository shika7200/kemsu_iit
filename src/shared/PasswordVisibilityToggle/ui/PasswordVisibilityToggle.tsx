import { PasswordVisibilityToggleProps } from "../types";
import styles from "./PasswordVisibilityToggle.module.scss";

const PasswordVisibilityToggle: React.FC<PasswordVisibilityToggleProps> = ({
    showPassword,
    setShowPassword,
  }) => {
    return (
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <label htmlFor="showPassword">Показать пароль</label>
      </div>
    );
  };
  
  export default PasswordVisibilityToggle;