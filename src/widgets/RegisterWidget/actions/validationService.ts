// validationService.ts
import { InputState } from "../types";
import validateEmail from "./validateEmail";
import validateName from "./validateName";
import validatePassword from "./validatePassword";

export const validateInputs = (inputs: InputState, inputFields: { label: string; name: keyof InputState }[]) => {
  const errors: InputState = {
    firstName: "",
    lastName: "",
    phone: "",
    login: "",
    password: "",
    apiError: "", // добавляем пустую строку по умолчанию
  };

  let hasError = false;

  for (const field of inputFields) {
    if (!inputs[field.name]) {
      errors[field.name] = "Это поле обязательно для заполнения";
      hasError = true;
    } else if (
      (field.name === "firstName" || field.name === "lastName") &&
      !validateName(inputs[field.name])
    ) {
      errors[field.name] =
        "Имя и фамилия должны содержать только русские буквы, без цифр и спецсимволов";
      hasError = true;
    } else if (field.name === "login" && !validateEmail(inputs[field.name])) {
      errors[field.name] = "Введите корректный адрес электронной почты";
      hasError = true;
    } else if (
      field.name === "password" &&
      !validatePassword(inputs.password, inputs.login)
    ) {
      errors[field.name] =
        "Пароль должен быть не менее 8 символов, содержать спецсимволы и не совпадать с логином";
      hasError = true;
    } else if (
      field.name === "phone" &&
      inputs[field.name].replace(/\D/g, "").length < 11
    ) {
      errors[field.name] = "Введите корректный номер телефона";
      hasError = true;
    }
  }

  return { errors, hasError };
};
