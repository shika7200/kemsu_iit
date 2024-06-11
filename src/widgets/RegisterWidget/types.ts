export interface InputState {
  firstName: string;
  lastName: string;
  phone: string;
  login: string;
  password: string;
  apiError?: string; // добавляем новое свойство как необязательное
}