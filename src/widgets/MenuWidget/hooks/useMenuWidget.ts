import { useState, useEffect } from 'react';
import { isUserAuthenticated } from '@/utils';
import { useRouter } from 'next/router';
import { filteredMenuItems } from '../actions';
export const useMenuWidget = (menuItems: MenuItemProps[], menuItemsAuth: MenuItemProps[]) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsAuthenticated(isUserAuthenticated());
  }, []);
const handleMenuClick = () => {
    setIsMenuOpen(true);
  };
const handleClosePopup = () => {
    setIsMenuOpen(false);
    setShowLogoutConfirmation(false);
  };
 const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };
const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
  };
 const currentPath = router.pathname;
  const filteredItems = isAuthenticated ? filteredMenuItems(menuItemsAuth, currentPath) : filteredMenuItems(menuItems, currentPath);
return {
    isMenuOpen,
    setIsMenuOpen,
    isAuthenticated,
    setIsAuthenticated,
    showLogoutConfirmation,
    setShowLogoutConfirmation,
    handleMenuClick,
    handleClosePopup,
    handleLogoutClick,
    handleCancelLogout,
    filteredItems,
    router,
  };
};
