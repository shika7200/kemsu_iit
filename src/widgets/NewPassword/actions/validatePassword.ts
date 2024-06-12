const validatePassword = (password: string): string | null => {
  const minLength = 8;
  const hasNumber = /\d/;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

  if (password.length < minLength) {
    return "Пароль должен быть не менее 8 символов";
  }
  if (!hasNumber.test(password)) {
    return "Пароль должен содержать хотя бы одну цифру";
  }
  if (!hasSpecialChar.test(password)) {
    return "Пароль должен содержать хотя бы один специальный символ";
  }
  return null;
};

export default validatePassword;
