import { Heading, PasswordVisibilityToggle, Button, Input } from "@/shared";
import { inputFields } from "../config";
import styles from "./RegisterWidget.module.scss";
import { useRegisterForm } from "../hooks";
import { formatPhoneNumber } from "../actions";


const RegisterWidget: React.FC = () => {
  const {
    inputs,
    errors,
    showPassword,
    setShowPassword,
    handleFormSubmit,
    handleInputChangeWrapper,
    isSuccess,
  } = useRegisterForm();

  return (
    <div className={styles.div}>
      <Heading text="Регистрация" />
      {isSuccess ? (
        <p className={styles.success}>Регистрация прошла успешно! Перенаправление на главную страницу...</p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          {inputFields.map((field, index) => (
            <div key={index}>
              <Input
                placeholder={field.label}
                value={
                  field.name === "phone"
                    ? formatPhoneNumber(inputs[field.name] ?? "")
                    : inputs[field.name] ?? ""
                }
                onChange={handleInputChangeWrapper}
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
            onButtonClick={() => handleFormSubmit}
          />
          {errors.apiError && (
            <p className={styles.error}>{errors.apiError}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default RegisterWidget;
