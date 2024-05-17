import { Dispatch, SetStateAction } from "react";
import { InputConfig } from "../types";

const createInputConfig = (
  email: string,
  setEmail: Dispatch<SetStateAction<string>>,
  verificationCode: string,
  setVerificationCode: Dispatch<SetStateAction<string>>
): InputConfig[] => [
  {
    placeholder: "Введите адрес эл. почты",
    value: email,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
  },
  {
    placeholder: "Введите код восстановления",
    value: verificationCode,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setVerificationCode(e.target.value),
  },
];

export default createInputConfig;
