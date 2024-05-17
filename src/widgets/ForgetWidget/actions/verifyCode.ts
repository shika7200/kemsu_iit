const verifyCode = (inputCode: string, generatedCode: string): boolean => {
    return inputCode === generatedCode;
  };
  
  export default verifyCode;
  