export const handleLogoutConfirm = (
    router: any, 
    setIsAuthenticated: (isAuthenticated: boolean) => void, 
    setShowLogoutConfirmation: (showLogoutConfirmation: boolean) => void
  ) => {
    // Удаляем токены из cookies и localStorage
    document.cookie = 'access_token=; Max-Age=0; path=/; domain=' + window.location.hostname;
    localStorage.removeItem('pocketbase_auth');
  
    setIsAuthenticated(false);
    setShowLogoutConfirmation(false);
    router.push('/');
  };
  