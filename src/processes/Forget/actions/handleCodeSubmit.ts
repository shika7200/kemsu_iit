import { Dispatch, SetStateAction } from 'react';

const handleCodeSubmit = (
  submittedEmail: string,
  setEmail: Dispatch<SetStateAction<string>>,
  setStep: Dispatch<SetStateAction<number>>
) => {
  setEmail(submittedEmail);
  setStep(2);
};

export default handleCodeSubmit;
