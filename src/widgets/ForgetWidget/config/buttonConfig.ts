import { Dispatch, SetStateAction } from "react";
import { handleRequestCode, handleSendCode } from "../actions";
import { ButtonConfig } from "../types";

const createButtonConfig = (
  email: string,
  verificationCode: string,
  generatedCode: string,
  setGeneratedCode: Dispatch<SetStateAction<string>>,
  setError: Dispatch<SetStateAction<string | null>>,
  onCodeSubmit: (email: string) => void,
  handleRequestCodeWithTimer: (email: string, setGeneratedCode: (code: string) => void) => void,
  isRequestDisabled: boolean
): ButtonConfig[] => [
  {
    buttonText: "Запросить код восстановления",
    onClick: () => handleRequestCodeWithTimer(email, setGeneratedCode),
    disabled: isRequestDisabled,
  },
  {
    buttonText: "Отправить код восстановления",
    onClick: () => {
      handleSendCode(verificationCode, generatedCode, setError, onCodeSubmit, email);
    },
    disabled: false,
  },
];

export default createButtonConfig;
