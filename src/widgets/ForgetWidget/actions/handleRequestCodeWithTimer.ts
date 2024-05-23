import { Dispatch, SetStateAction } from "react";
import handleRequestCode from "./handleRequestCode";

const handleRequestCodeWithTimer = (
  email: string,
  setGeneratedCode: Dispatch<SetStateAction<string>>,
  setIsRequestDisabled: Dispatch<SetStateAction<boolean>>,
  setTimer: Dispatch<SetStateAction<number>>
) => {
  setIsRequestDisabled(true);
  setTimer(50);
  handleRequestCode(email, setGeneratedCode);
};

export default handleRequestCodeWithTimer;
