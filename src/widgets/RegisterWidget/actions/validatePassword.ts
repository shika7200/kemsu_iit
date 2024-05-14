const validatePassword = (password: string, login: string) => {
  const minLength = 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return false;
  }

  if (!hasSpecialChar) {
    return false;
  }

  if (password === login) {
    return false;
  }

  return true;
};

export default validatePassword;
