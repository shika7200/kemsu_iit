const deleteCookie = (name: string, path: string, domain: string) => {
  if (typeof window !== 'undefined') {
    document.cookie = `${name}=; Max-Age=0; path=${path}; domain=${domain}; SameSite=None; Secure`;
    console.log(`Cookie ${name} удалена`);
  }
};

export const handleLogoutConfirm = (
  router: any, 
  setIsAuthenticated: (isAuthenticated: boolean) => void, 
  setShowLogoutConfirmation: (showLogoutConfirmation: boolean) => void
) => {
  if (typeof window !== 'undefined') {
    // Удаляем токены из cookies и localStorage с учетом всех атрибутов
    deleteCookie('access_token', '/', window.location.hostname);
    localStorage.removeItem('pocketbase_auth');
    console.log('localStorage pocketbase_auth удален');

    setIsAuthenticated(false);
    setShowLogoutConfirmation(false);
    router.push('/');
  }
};
