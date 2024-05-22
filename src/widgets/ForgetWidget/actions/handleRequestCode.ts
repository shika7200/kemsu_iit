import generateVerificationCode from './generateVerificationCode';

const handleRequestCode = async (email: string, setGeneratedCode: (code: string) => void) => {
  const verificationCode = generateVerificationCode();
  setGeneratedCode(verificationCode);

  try {
    const response = await fetch('/api/sendVerificationEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: email, code: verificationCode }),
    });

    if (!response.ok) {
      throw new Error('Failed to send verification email');
    }

    console.log(`Verification code sent to ${email}: ${verificationCode}`);
  } catch (error) {
    console.error('Error sending verification code', error);
  }
};

export default handleRequestCode;
