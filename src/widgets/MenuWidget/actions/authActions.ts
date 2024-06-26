import Cookies from 'js-cookie';
import PocketBase from 'pocketbase';


export const handleLogoutConfirm = (
  router: any, 
  setIsAuthenticated: (isAuthenticated: boolean) => void, 
  setShowLogoutConfirmation: (showLogoutConfirmation: boolean) => void
) => {
  if (typeof window !== 'undefined') {
    Cookies.remove('access_token', { path: '', domain: window.location.hostname, sameSite: 'Strict', secure: true });
    localStorage.removeItem('pocketbase_auth');
    console.log('localStorage pocketbase_auth удален');
    const pb = new PocketBase('https://mats-kemsu.pockethost.io');
    pb.authStore.clear();
   

    setIsAuthenticated(false);
    setShowLogoutConfirmation(false);
    router.push('/');
  }
};
