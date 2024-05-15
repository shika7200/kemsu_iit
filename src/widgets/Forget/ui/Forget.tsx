import React from 'react';
import MainLayout from '@/enteties/MainLayout';
import ForgetWidget from '@/widgets/ForgetWidget';
import NewPassword from '@/widgets/NewPassword';
import { handleCodeSubmit, useForget } from '../actions';


const Forget: React.FC = () => {
  const { step, setStep, email, setEmail } = useForget();

  return (
    <MainLayout>
      {step === 1 ? (
        <ForgetWidget onCodeSubmit={(submittedEmail: string) => handleCodeSubmit(submittedEmail, setEmail, setStep)} />
      ) : (
        <NewPassword email={email} />
      )}
    </MainLayout>
  );
};

export default Forget;

