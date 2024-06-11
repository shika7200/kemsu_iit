// actions/index.ts
export { default as handleLoginChange } from './handleLoginChange';
export { default as handlePasswordChange } from './handlePasswordChange';
export { default as handleNavigation } from './handleNavigation';
export { loginUser, logoutUser, refreshToken } from './authService'; // Добавляем export для authService
export { default as handleAuthSubmit } from './handleAuthSubmit';
