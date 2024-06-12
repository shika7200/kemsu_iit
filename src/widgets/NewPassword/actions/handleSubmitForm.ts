import { Dispatch, SetStateAction } from "react";
import changePassword from "./changePassword";

const handleSubmitForm = (
  e: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string,
  rpassword: string,
  setError: Dispatch<SetStateAction<string | null>>,
  setSuccess: Dispatch<SetStateAction<string | null>>
): void => {
  e.preventDefault();
  changePassword(email, password, rpassword, setError, setSuccess);
};

export default handleSubmitForm;
