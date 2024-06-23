// utils/auth.ts
 const isUserAuthenticated = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const accessToken = document.cookie.split('; ').find(row => row.startsWith('access_token'));
  const localStorageToken = localStorage.getItem('pocketbase_auth');
  
  return !!accessToken || !!localStorageToken;
};

export default isUserAuthenticated;


