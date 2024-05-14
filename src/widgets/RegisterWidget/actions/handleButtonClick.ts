import { FormEvent } from "react";
import { InputState } from "../types";
import validateEmail from "./validateEmail";
import validateName from "./validateName";
import validatePassword from "./validatePassword";


const handleButtonClick = (
  e: FormEvent,
  inputs: InputState,
  setErrors: React.Dispatch<React.SetStateAction<InputState>>,
  inputFields: { label: string; name: keyof InputState }[],
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
    } else if ((field.name === "firstName" || field.name === "lastName") && !validateName(inputs[field.name])) {
      newErrors[field.name] = "Имя и фамилия должны содержать только русские буквы, без цифр и спецсимволов";
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
    } else if (field.name === "phone" && inputs[field.name].replace(/\D/g, "").length < 11) {
      newErrors[field.name] = "Введите корректный номер телефона";
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
