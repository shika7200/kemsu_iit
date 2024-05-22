import  handleSendCode  from './handleSendCode';

const handleSendCodeClick = (
  verificationCode: string,
  generatedCode: string,
  setError: (message: string | null) => void,
  onCodeSubmit: (email: string) => void,
  email: string
) => {
  handleSendCode(verificationCode, generatedCode, setError);
  if (verificationCode === generatedCode) {
    onCodeSubmit(email);
  }
};

export default handleSendCodeClick;
