import { useState } from 'react';

const useForget = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  return {
    step,
    setStep,
    email,
    setEmail,
  };
};

export default useForget;
