import { Dispatch, SetStateAction } from "react";
import { InputConfig } from "../types";

const createInputConfig = (
  email: string,
  handleEmailChange: (newEmail: string) => void, // Обновленный тип параметра
  verificationCode: string,
  setVerificationCode: Dispatch<SetStateAction<string>>
): InputConfig[] => [
  {
    placeholder: "Введите адрес эл. почты",
    value: email,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      handleEmailChange(e.target.value), // Используем handleEmailChange
  },
  {
    placeholder: "Введите код восстановления",
    value: verificationCode,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setVerificationCode(e.target.value),
  },
];

export default createInputConfig;
