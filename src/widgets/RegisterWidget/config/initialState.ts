import { InputState } from "../types";

// initial states
export const initialInputs: InputState = {
  firstName: "",
  lastName: "",
  phone: "",
  login: "",
  password: "",
};

export const initialErrors: InputState = {
  firstName: "",
  lastName: "",
  phone: "",
  login: "",
  password: "",
  apiError: "", // добавляем пустую строку по умолчанию
};