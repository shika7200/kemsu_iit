import { InputConfig } from "../types";

   const createInputConfig = (
    login: string,
    setLogin: (value: string) => void,
    password: string,
    setPassword: (value: string) => void,
    setError: (value: string) => void
  ): InputConfig[] => [
    {
      placeholder: "Введите логин",
      type: "text",
      value: login,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
        setError("");
      },
    },
    {
      placeholder: "Введите пароль",
      type: "password",
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setError("");
      },
    },
  ];
  
  export default createInputConfig;
  