import { FormEvent } from "react";
import { InputState } from "../types";

const handleButtonClick = (
  e: FormEvent,
  inputs: InputState,
  setErrors: React.Dispatch<React.SetStateAction<InputState>>,
  inputFields: { label: string; name: keyof InputState }[],
  validateEmail: (email: string) => boolean,
  validatePassword: (password: string, login: string) => boolean
) => {
  e.preventDefault();

  const newErrors: InputState = {
    firstName: "",
    lastName: "",
    phone: "",
    login: "",
    password: "",
  };

  let hasError = false;

  for (const field of inputFields) {
    if (!inputs[field.name]) {
      newErrors[field.name] = "Это поле обязательно для заполнения";
      hasError = true;
    } else if (field.name === "login" && !validateEmail(inputs[field.name])) {
      newErrors[field.name] = "Введите корректный адрес электронной почты";
      hasError = true;
    } else if (
      field.name === "password" &&
      !validatePassword(inputs.password, inputs.login)
    ) {
      newErrors[field.name] =
        "Пароль должен быть не менее 8 символов, содержать спецсимволы и не совпадать с логином";
      hasError = true;
    }
  }

  setErrors(newErrors);

  if (!hasError) {
    console.log("Form submitted successfully with:", inputs);
    // Add your form submission logic here
  }
};

export default handleButtonClick;
