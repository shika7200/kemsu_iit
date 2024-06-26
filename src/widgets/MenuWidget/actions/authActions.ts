export const handleLogoutConfirm = (
  router: any, 
  setIsAuthenticated: (isAuthenticated: boolean) => void, 
  setShowLogoutConfirmation: (showLogoutConfirmation: boolean) => void
) => {
  // Удаляем токены из cookies и localStorage с учетом атрибута SameSite и Secure
  document.cookie = 'access_token=; Max-Age=0; path=/; domain=' + window.location.hostname + '; SameSite=None; Secure';
  console.log('Cookie access_token удалена');
  localStorage.removeItem('pocketbase_auth');
  console.log('localStorage pocketbase_auth удален');

  setIsAuthenticated(false);
  setShowLogoutConfirmation(false);
  router.push('/');
};
