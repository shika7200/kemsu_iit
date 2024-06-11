// actions/handleAuthSubmit.ts
import { FormEvent, Dispatch, SetStateAction } from "react";
import { NextRouter } from "next/router";
import { loginUser } from "./authService";

const handleAuthSubmit = async (
  event: React.FormEvent | null,
  login: string,
  password: string,
  setError: Dispatch<SetStateAction<string>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  router: NextRouter
): Promise<void> => {
  if (event) {
    event.preventDefault();
  }
  if (!login || !password) {
    setError("Ошибка: Логин и пароль должны быть заполнены.");
    setIsLoading(false);
    return;
  }
  setError("");
  const isAuthenticated = await loginUser(login, password, setError);
  setIsLoading(false);
  if (isAuthenticated) {
    router.push("/Home");
  }
};

export default handleAuthSubmit;
