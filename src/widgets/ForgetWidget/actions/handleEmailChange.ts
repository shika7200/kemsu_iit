import { Dispatch, SetStateAction } from "react";

const handleEmailChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setEmail: Dispatch<SetStateAction<string>>
) => {
  setEmail(e.target.value);
};

export default handleEmailChange;
