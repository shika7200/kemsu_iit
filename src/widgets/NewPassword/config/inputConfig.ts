import { Dispatch, SetStateAction } from "react";
import { InputConfig } from "../types";

const createInputConfig = (
    password: string,
    setPassword: Dispatch<SetStateAction<string>>,
    rpassword: string,
    setRpassword: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<string | null>>
  ): InputConfig[] => [
    {
      placeholder: "Введите новый пароль",
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setError(null);
      },
    },
    {
      placeholder: "Введите новый пароль повторно",
      value: rpassword,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setRpassword(e.target.value);
        setError(null);
      },
    },
  ];
  
  export default createInputConfig;