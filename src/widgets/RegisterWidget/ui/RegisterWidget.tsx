import { useState } from "react";
import styles from "./RegisterWidget.module.scss";
import { InputState } from "../types";
import { handleButtonClick, validateEmail, validatePassword, formatPhoneNumber, handleInputChange } from "../actions";
import { Heading, PasswordVisibilityToggle, Button, Input } from "@/shared";


const RegisterWidget: React.FC = () => {
  const [inputs, setInputs] = useState<InputState>({
    firstName: "",
    lastName: "",
    phone: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState<InputState>({
    firstName: "",
    lastName: "",
    phone: "",
    login: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const inputFields: { label: string; name: keyof InputState }[] = [
    { label: "Введите имя", name: "firstName" },
    { label: "Введите фамилию", name: "lastName" },
    { label: "Введите телефон", name: "phone" },
    { label: "Придумайте логин", name: "login" },
    { label: "Придумайте пароль", name: "password" },
  ];

  return (
    <div className={styles.div}>
      <Heading text="Регистрация" />
      <form
        onSubmit={(e) =>
          handleButtonClick(
            e,
            inputs,
            setErrors,
            inputFields,
            validateEmail,
            validatePassword
          )
        }
      >
        {inputFields.map((field, index) => (
          <div key={index}>
            <Input
              placeholder={field.label}
              value={
                field.name === "phone"
                  ? formatPhoneNumber(inputs[field.name])
                  : inputs[field.name]
              }
              onChange={(e) => handleInputChange(e, setInputs)}
              name={field.name}
              type={
                field.name === "password" && !showPassword ? "password" : "text"
              }
            />
            {errors[field.name] && (
              <p className={styles.error}>{errors[field.name]}</p>
            )}
          </div>
        ))}
        <PasswordVisibilityToggle
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Button
          buttonText="Создать"
          buttonStyles={styles.create_button}
          onButtonClick={() => handleButtonClick}
        />
      </form>
    </div>
  );
};

export default RegisterWidget;
