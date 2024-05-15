import { Dispatch, SetStateAction } from "react";
import { NextRouter } from "next/router";
import handleFormSubmit from "./handleFormSubmit";

const handleButtonClickWrapper = (
  login: string,
  password: string,
  setError: Dispatch<SetStateAction<string>>,
  router: NextRouter
) => {
  handleFormSubmit({ preventDefault: () => {} } as React.FormEvent, login, password, setError, router);
};

export default handleButtonClickWrapper;
