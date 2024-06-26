import Cookies from 'js-cookie';
import PocketBase from 'pocketbase';


export const handleLogoutConfirm = (
  router: any, 
  setIsAuthenticated: (isAuthenticated: boolean) => void, 
  setShowLogoutConfirmation: (showLogoutConfirmation: boolean) => void
) => {
  if (typeof window !== 'undefined') {
   
    localStorage.removeItem('access_token');
    console.log('localStorage pocketbase_auth удален');
    const pb = new PocketBase('https://mats-kemsu.pockethost.io');
    pb.authStore.clear();
   

    setIsAuthenticated(false);
    setShowLogoutConfirmation(false);
    router.push('/');
  }
};
