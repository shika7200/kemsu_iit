import { useState, useEffect } from "react";
import handleRequestCodeWithTimer from "../actions/handleRequestCodeWithTimer";
import { createButtonConfig, createInputConfig } from "../config";

const useForgetWidget = (onCodeSubmit: (email: string) => void) => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isRequestDisabled, setIsRequestDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRequestDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsRequestDisabled(false);
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRequestDisabled, timer]);

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
    setError(null); // Сбрасываем ошибку при изменении email
  };

  const handleRequestCodeWithTimerWrapper = (email: string) => {
    handleRequestCodeWithTimer(
      email,
      setGeneratedCode,
      setIsRequestDisabled,
      setTimer,
      setError // Передаем setError в функцию
    );
  };

  const inputs = createInputConfig(
    email,
    handleEmailChange, // Используем новую функцию для изменения email
    verificationCode,
    setVerificationCode
  );
  const buttons = createButtonConfig(
    email,
    verificationCode,
    generatedCode,
    setGeneratedCode,
    setError,
    onCodeSubmit,
    handleRequestCodeWithTimerWrapper,
    isRequestDisabled
  );

  return {
    inputs,
    buttons,
    error, // Возвращаем ошибку
    timer,
    isRequestDisabled,
  };
};

export default useForgetWidget;
