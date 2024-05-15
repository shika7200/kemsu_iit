import { Dispatch, SetStateAction } from "react";

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setInput: Dispatch<SetStateAction<string>>,
  setError: Dispatch<SetStateAction<string | null>>
) => {
  setInput(e.target.value);
  setError(null); // Сброс ошибки при изменении поля
};

export default handleInputChange;
