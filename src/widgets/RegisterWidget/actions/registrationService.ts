// registrationService.ts
import PocketBase from 'pocketbase';
import { InputState } from "../types";

const pb = new PocketBase('https://mats-kemsu.pockethost.io');

export const registerUser = async (
  inputs: InputState,
  setErrors: React.Dispatch<React.SetStateAction<InputState>>
): Promise<boolean> => {
  try {
    const emailParts = inputs.login.split("@");
    const username = emailParts[0]; // Используем часть адреса электронной почты до "@"

    const data = {
      username: username,
      email: inputs.login,
      emailVisibility: true,
      password: inputs.password,
      passwordConfirm: inputs.password,
      name: inputs.firstName,
      surname: inputs.lastName,
      phone: inputs.phone,
    };

    console.log("Sending data to PocketBase:", data);

    const record = await pb.collection('users').create(data);

    // Optional: send an email verification request
    await pb.collection('users').requestVerification(inputs.login);

    console.log("Form submitted successfully with:", record);
    return true; // Возвращаем true при успешной регистрации

  } catch (error: any) {
    console.error("Error creating user:", error);

    let apiErrorMessage = "Ошибка создания пользователя. Попробуйте еще раз.";

    const response = error?.response;

    if (response) {
      if (response.data?.email?.message === "The email is invalid or already in use.") {
        apiErrorMessage = "Пользователь уже существует.";
      } else if (response.data?.username?.message === "The username is invalid or already in use.") {
        apiErrorMessage = "Пользователь уже существует.";
      }
    }

    // Set the error message to be displayed on the UI
    setErrors((prevErrors) => ({
      ...prevErrors,
      apiError: apiErrorMessage,
    }));

    return false; // Возвращаем false при ошибке регистрации
  }
};
