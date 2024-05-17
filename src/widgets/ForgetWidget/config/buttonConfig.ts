import { Dispatch, SetStateAction } from "react";
import { handleRequestCode, handleSendCode } from "../actions";
import { ButtonConfig } from "../types";

const createButtonConfig = (
  email: string,
  verificationCode: string,
  generatedCode: string,
  setGeneratedCode: Dispatch<SetStateAction<string>>,
  setError: Dispatch<SetStateAction<string | null>>,
  onCodeSubmit: (email: string) => void
): ButtonConfig[] => [
  {
    buttonText: "Запросить код восстановления",
    onClick: () => handleRequestCode(email, setGeneratedCode),
  },
  {
    buttonText: "Отправить код восстановления",
    onClick: () => {
      handleSendCode(verificationCode, generatedCode, setError, onCodeSubmit, email);
    },
  },
];

export default createButtonConfig;
