
const isUserAuthenticated = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const accessToken = localStorage.getItem('access_token');
  
  return !!accessToken;
};

export default isUserAuthenticated;
