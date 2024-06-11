// hooks/useAuth.ts
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { handleNavigation } from "../actions";
import handleAuthSubmit from "../actions/handleAuthSubmit";
import { createInputConfig } from "../config";

export const useAuth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('access_token');
    if (token) {
      try {
        const decoded: any = jwt.decode(token);
        if (decoded && decoded.exp * 1000 > Date.now()) {
          router.push("/Home");
        }
      } catch (e) {
        // Invalid token, proceed to login
      }
    }
  }, [router]);

  const inputs = createInputConfig(login, setLogin, password, setPassword, setError);

  const handleSubmit = (e: React.FormEvent) => {
    if (isLoading) return;
    setIsLoading(true);
    handleAuthSubmit(e, login, password, setError, setIsLoading, router);
  };

  const handleButtonClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    handleAuthSubmit(null, login, password, setError, setIsLoading, router);
  };

  const navigate = (path: string) => {
    handleNavigation(router, path);
  };

  return {
    login,
    setLogin,
    password,
    setPassword,
    error,
    setError,
    isLoading,
    setIsLoading,
    inputs,
    handleSubmit,
    handleButtonClick,
    navigate,
  };
};
