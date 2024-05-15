import { Dispatch, SetStateAction } from "react";

const handleVerificationCodeChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setVerificationCode: Dispatch<SetStateAction<string>>
) => {
  setVerificationCode(e.target.value);
};

export default handleVerificationCodeChange;
