// actions/authService.ts
import PocketBase from 'pocketbase';
import Cookies from 'js-cookie';

const pb = new PocketBase('https://mats-kemsu.pockethost.io');
pb.autoCancellation(false); // Глобально отключаем автоотмену запросов

export const loginUser = async (
  email: string,
  password: string,
  setError: React.Dispatch<React.SetStateAction<string>>
): Promise<boolean> => {
  console.log("loginUser triggered");
  try {
    const authData = await pb.collection('users').authWithPassword(email, password);

    console.log('Authenticated successfully:', authData);
    console.log('Token:', pb.authStore.token);

    Cookies.set('access_token', pb.authStore.token, { expires: 1 / 24, sameSite: 'Strict' }); // 1 hour

    return true; // Возвращаем true при успешной авторизации
  } catch (error: any) {
    console.error('Error logging in:', error);

    let apiErrorMessage = 'Ошибка авторизации. Попробуйте еще раз.';

    const response = error?.response;

    if (response) {
      apiErrorMessage = 'Неправильный email или пароль.';
    }

    setError(apiErrorMessage);

    return false; // Возвращаем false при ошибке авторизации
  }
};

export const refreshToken = async (): Promise<string | null> => {
  try {
    const authData = await pb.collection('users').authRefresh();
    Cookies.set('access_token', authData.token, { expires: 1 / 24, sameSite: 'Strict' }); // 1 hour
    return authData.token;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    return null;
  }
};

export const logoutUser = () => {
  pb.authStore.clear();
  Cookies.remove('access_token');
};
