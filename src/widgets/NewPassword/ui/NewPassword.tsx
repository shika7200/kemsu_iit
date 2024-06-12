import { Button, Input } from "@/shared";
import styles from "./NewPassword.module.scss";
import { useState } from "react";
import triggerFormSubmit from "../actions/triggerFormSubmit";
import { createInputConfig, imageUrl } from "../config";
import { NewPasswordProps } from "../types";
import { handleSubmitForm } from "../actions";

const NewPassword: React.FC<NewPasswordProps> = ({ email }) => {
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const inputs = createInputConfig(
    password,
    setPassword,
    rpassword,
    setRpassword,
    setError
  );

  return (
    <div className={styles.div}>
      <form
        className={styles.form}
        onSubmit={(e) =>
          handleSubmitForm(e, email, password, rpassword, setError, setSuccess)
        }
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
          onButtonClick={triggerFormSubmit}
          buttonStyles={styles.create_button}
        />
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
      </form>
      <img src={imageUrl} alt="" className={styles.img} />
    </div>
  );
};

export default NewPassword;
