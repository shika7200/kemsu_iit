"use client"

import React from "react";
import { Menu, MenuItem } from "@/features";
import styles from "./MenuWidget.module.scss";
import { menuItems, menuItemsAuth } from "../config";
import { useMenuWidget } from "../hooks";
import { handleLogoutConfirm } from "../actions";

const MenuWidget: React.FC = () => {
  const {
    isMenuOpen,
    isAuthenticated,
    showLogoutConfirmation,
    handleMenuClick,
    handleClosePopup,
    handleLogoutClick,
    handleCancelLogout,
    setIsAuthenticated,
    setShowLogoutConfirmation,
    filteredItems,
    router,
  } = useMenuWidget(menuItems, menuItemsAuth);

  return ( //Здесь следует реализация компонента . Для слайда свернута
    <>
      <div className={`${styles.menu} ${isMenuOpen ? styles.menuHidden : ""}`}>
        <Menu onClick={handleMenuClick} />
      </div>
      {isMenuOpen && (
        <div
          className={`${styles.popupOverlay} ${isMenuOpen ? styles.popupOverlayOpen : ""
            }`}
          onClick={handleClosePopup}
        >
          <div
            className={`${styles.popup} ${isMenuOpen ? styles.popupOpen : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={styles.closeButton}
              onClick={handleClosePopup}
            ></span>
            <main className={styles.main}>
              <nav className={styles.nav}>
                {showLogoutConfirmation ? (
                  <>
                    <p className={styles.confirmationText}>Выйти?</p>
                    <button
                      onClick={() =>
                        handleLogoutConfirm(
                          router,
                          setIsAuthenticated,
                          setShowLogoutConfirmation
                        )
                      }
                      className={styles.logoutConfirmButton}
                    >
                      Выйти
                    </button>
                    <button
                      onClick={handleCancelLogout}
                      className={styles.cancelButton}
                    >
                      Отмена
                    </button>
                  </>
                ) : (
                  <>
                    {isAuthenticated && (
                      <button
                        onClick={handleLogoutClick}
                        className={styles.logoutButton}
                      >
                        Выход из личного кабинета
                      </button>
                    )}
                    {filteredItems.map((item, index) => (
                      <MenuItem
                        key={index}
                        text={item.text}
                        className={`${styles.menuItem} ${styles.menuItemOpen} ${item.className}`}
                        href={item.href}
                      />
                    ))}
                  </>
                )}
              </nav>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuWidget;
