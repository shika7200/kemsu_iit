// actions/authService.ts
import PocketBase from 'pocketbase';

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

    // Сохраняем токен в localStorage
    localStorage.setItem('access_token', pb.authStore.token);

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
    // Обновляем токен в localStorage
    localStorage.setItem('access_token', authData.token);
    return authData.token;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    return null;
  }
};

export const logoutUser = () => {
  pb.authStore.clear();
  // Удаляем токен из localStorage
  localStorage.removeItem('access_token');
};
