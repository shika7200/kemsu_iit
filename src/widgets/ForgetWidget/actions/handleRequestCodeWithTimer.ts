import { Dispatch, SetStateAction } from "react";
import PocketBase from 'pocketbase';
import handleRequestCode from "./handleRequestCode";

const pb = new PocketBase('https://mats-kemsu.pockethost.io');

const checkUserExists = async (email: string): Promise<boolean> => {
  try {
    const record = await pb.collection('users').getFirstListItem(`email="${email}"`);
    return !!record;
  } catch (error: any) {
    if (error.isAbort) {
      console.error('Запрос был прерван');
    } else {
      console.error('Ошибка при проверке существования пользователя:', error);
    }
    return false;
  }
};

const handleRequestCodeWithTimer = async (
  email: string,
  setGeneratedCode: Dispatch<SetStateAction<string>>,
  setIsRequestDisabled: Dispatch<SetStateAction<boolean>>,
  setTimer: Dispatch<SetStateAction<number>>,
  setError: Dispatch<SetStateAction<string | null>> // Добавляем setError
) => {
  setError(null); // Сбрасываем ошибку перед началом проверки
  const userExists = await checkUserExists(email);

  if (userExists) {
    setIsRequestDisabled(true);
    setTimer(50);
    handleRequestCode(email, setGeneratedCode);
  } else {
    setError('Пользователь не найден'); // Устанавливаем ошибку
    console.error('Пользователь не существует');
  }
};

export default handleRequestCodeWithTimer;
