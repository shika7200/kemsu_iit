import { Dispatch, SetStateAction } from "react";

const handleLoginChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setLogin: Dispatch<SetStateAction<string>>
) => {
  setLogin(e.target.value);
};

export default handleLoginChange;
