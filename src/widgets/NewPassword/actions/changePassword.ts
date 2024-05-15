import { Dispatch, SetStateAction } from 'react';
import validatePassword from './validatePassword';

const changePassword = (
  email: string,
  password: string,
  rpassword: string,
  setError: Dispatch<SetStateAction<string | null>>
): void => {
  if (password !== rpassword) {
    setError('Пароли не совпадают');
  } else if (!validatePassword(password)) {
    setError('Пароль должен содержать минимум 8 символов, включая цифры и спецсимволы');
  } else {
    setError(null);
    // Логика отправки нового пароля на сервер
    console.log('Password changed successfully for email:', email);
    fetch('/api/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Password changed successfully on server');
        } else {
          setError('Ошибка при смене пароля на сервере');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Ошибка при смене пароля на сервере');
      });
  }
};

export default changePassword;
