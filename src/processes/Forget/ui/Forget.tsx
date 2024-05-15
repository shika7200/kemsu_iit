import React from 'react';
import { handleCodeSubmit, useForget } from '../actions';
import { ForgetWidget, NewPassword } from '@/widgets';
import { MainLayout } from '@/enteties';


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

