import { FormEvent, Dispatch, SetStateAction } from "react";
import { NextRouter } from "next/router";
import handleFormSubmit from "./handleFormSubmit";

const handleFormSubmitWrapper = (
  e: FormEvent,
  login: string,
  password: string,
  setError: Dispatch<SetStateAction<string>>,
  router: NextRouter
) => {
  handleFormSubmit(e, login, password, setError, router);
};

export default handleFormSubmitWrapper;
