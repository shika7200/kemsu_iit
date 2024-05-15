import { ButtonConfig } from "../types";

  
  const createButtonConfig = (
    email: string,
    verificationCode: string,
    handleRequestCode: (email: string) => void,
    handleSendCode: (verificationCode: string) => void
  ): ButtonConfig[] => [
    {
      buttonText: "Запросить код восстановления",
      onClick: () => handleRequestCode(email),
    },
    {
      buttonText: "Отправить код восстановления",
      onClick: () => handleSendCode(verificationCode),
    },
  ];
  
  export default createButtonConfig;
  