import { Button, Input } from "@/shared";
import styles from "./NewPassword.module.scss";
import { useState } from "react";
import { handleSubmit } from "../actions";
import { createInputConfig, imageUrl } from "../config";

function NewPassword() {
  const [password, setPassword] = useState<string>('');
  const [rpassword, setRpassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const inputs = createInputConfig(password, setPassword, rpassword, setRpassword, setError);

  return (
    <div className={styles.div}>
      <form 
        className={styles.form}
        onSubmit={(e) => { e.preventDefault(); handleSubmit(password, rpassword, setError); }}
      >
        {inputs.map((input, index) => (
          <Input 
            key={index}
            placeholder={input.placeholder} 
            onChange={input.onChange} 
            value={input.value}
            type="password"
          />
        ))}
        <Button 
          buttonText="Сменить пароль" 
          onButtonClick={() => handleSubmit(password, rpassword, setError)} 
          buttonStyles={styles.create_button}
        />
        {error && <p className={styles.error}>{error}</p>}
      </form>
      <img
        src={imageUrl}
        alt=""
        className={styles.img}
      />
    </div>
  );
}

export default NewPassword;
