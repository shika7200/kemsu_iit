import { InputState } from "../types";

const inputFields: { label: string; name: keyof InputState }[] = [
  { label: "Введите имя", name: "firstName" },
  { label: "Введите фамилию", name: "lastName" },
  { label: "Введите телефон", name: "phone" },
  { label: "Введите почту", name: "login" },
  { label: "Придумайте пароль", name: "password" },
];

export default inputFields;
