import verifyCode from "./verifyCode";

const handleSendCode = (
  inputCode: string,
  generatedCode: string,
  setError: (message: string | null) => void,
  onCodeSubmit?: (email: string) => void,
  email?: string
) => {
  if (verifyCode(inputCode, generatedCode)) {
    console.log("Проверочный код правильный");
    setError(null);
    if (onCodeSubmit && email) {
      onCodeSubmit(email);
    }
  } else {
    setError("Не правильный проверочный код");
  }
};

export default handleSendCode;
