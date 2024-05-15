import { Dispatch, SetStateAction } from "react";
import validatePassword from "./validatePassword";

const handleSubmit = (
  password: string,
  rpassword: string,
  setError: Dispatch<SetStateAction<string | null>>
) => {
  if (password !== rpassword) {
    setError("Пароли не совпадают");
  } else if (!validatePassword(password)) {
    setError("Пароль должен содержать минимум 8 символов, включая цифры и спецсимволы");
  } else {
    // Логика смены пароля
    console.log("Password changed successfully");
  }
};

export default handleSubmit;
