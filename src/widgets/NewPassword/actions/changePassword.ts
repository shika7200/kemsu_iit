import { Dispatch, SetStateAction } from "react";
import PocketBase from 'pocketbase';
import validatePassword from "./validatePassword";

const changePassword = async (
  email: string,
  password: string,
  rpassword: string,
  setError: Dispatch<SetStateAction<string | null>>,
  setSuccess: Dispatch<SetStateAction<string | null>>
): Promise<void> => {
  const pb = new PocketBase('https://mats-kemsu.pockethost.io');

  if (password !== rpassword) {
    setError("Пароли не совпадают");
  } else if (!validatePassword(password)) {
    setError("Пароль должен содержать минимум 8 символов, включая цифры и спецсимволы");
  } else {
    try {
      // Поиск пользователя по email
      const user = await pb.collection('users').getFirstListItem(`email="${email}"`);
      if (!user) {
        setError("Пользователь не найден");
        return;
      }

      // Обновление пароля пользователя
      await pb.collection('users').update(user.id, {
        password: password,
        passwordConfirm: rpassword,
      });

      setError(null);
      setSuccess("Пароль успешно изменен");

      setTimeout(() => {
        window.location.href = "/"; // Перенаправление на главную страницу
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ошибка при смене пароля на сервере");
      }
    }
  }
};

export default changePassword;
