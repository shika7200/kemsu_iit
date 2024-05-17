  import generateVerificationCode from "./generateVerificationCode";

  const handleRequestCode = (email: string, setGeneratedCode: (code: string) => void) => {
    const verificationCode = generateVerificationCode();
    setGeneratedCode(verificationCode);
    console.log(`Verification code sent to ${email}: ${verificationCode}`);
    // Add logic to send a verification code to the email
  };
  
  export default handleRequestCode;
  