import { useState, useEffect } from "react";
import { handleRequestCodeWithTimer } from "../actions";
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

  const handleRequestCodeWithTimerWrapper = (email: string) => {
    handleRequestCodeWithTimer(
      email,
      setGeneratedCode,
      setIsRequestDisabled,
      setTimer
    );
  };

  const inputs = createInputConfig(
    email,
    setEmail,
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
    error,
    timer,
    isRequestDisabled,
  };
};

export default useForgetWidget;
