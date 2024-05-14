// actions/handleInputChange.ts
import { InputState } from "../types";
import formatPhoneNumber from "./formatPhoneNumber";

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setInputs: React.Dispatch<React.SetStateAction<InputState>>
) => {
  const { name, value } = e.target;
  setInputs((prev) => ({
    ...prev,
    [name]: name === "phone" ? formatPhoneNumber(value) : value,
  }));
};

export default handleInputChange;
