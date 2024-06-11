// hooks/useRegisterForm.ts
import { useState } from 'react';
import { useRouter } from 'next/router';
import { InputState } from '../types';
import { validateInputs, registerUser, handleInputChange } from '../actions';
import { inputFields, initialInputs, initialErrors } from '../config';

const useRegisterForm = () => {
  const [inputs, setInputs] = useState<InputState>(initialInputs);
  const [errors, setErrors] = useState<InputState>(initialErrors);
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { errors: validationErrors, hasError } = validateInputs(inputs, inputFields);

    setErrors(validationErrors);

    if (!hasError) {
      const isRegistered = await registerUser(inputs, setErrors);
      if (isRegistered) {
        setIsSuccess(true);
        setTimeout(() => {
          router.push('/');
        }, 4000);
      }
    }
  };

  const handleInputChangeWrapper = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setInputs);
  };

  return {
    inputs,
    errors,
    showPassword,
    setShowPassword,
    handleFormSubmit,
    handleInputChangeWrapper,
    isSuccess,
  };
};

export default useRegisterForm;
