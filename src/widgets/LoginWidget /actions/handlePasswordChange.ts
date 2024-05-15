import { Dispatch, SetStateAction } from "react";

const handlePasswordChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setPassword: Dispatch<SetStateAction<string>>
) => {
  setPassword(e.target.value);
};

export default handlePasswordChange;
