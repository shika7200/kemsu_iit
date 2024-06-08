import { FormEvent, Dispatch, SetStateAction } from "react";
import { NextRouter } from "next/router";

const handleFormSubmit = (
  e: FormEvent,
  login: string,
  password: string,
  setError: Dispatch<SetStateAction<string>>,
  router: NextRouter
) => {
  e.preventDefault();
  if (!login || !password) {
    setError("Ошибка: Логин и пароль должны быть заполнены.");
  } else {
    setError("");
    console.log("Login:", login, "Password:", password);
    // Перенаправление на главную страницу
    router.push("/");
  }
};

export default handleFormSubmit;
