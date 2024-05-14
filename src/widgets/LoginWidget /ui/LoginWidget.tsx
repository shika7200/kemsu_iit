import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Widget.module.scss";
import Button from "@/shared/Button";
import Heading from "@/shared/Heading";
import Input from "@/shared/Input";

function LoginWidget() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login || !password) {
      setError("Ошибка: Логин и пароль должны быть заполнены.");
    } else {
      setError("");
      console.log("Login:", login, "Password:", password);
      // Перенаправление на главную страницу
      router.push("/");
    }
  };

  const handleButtonClick = () => {
    // This function can be used for other button clicks without parameters
    console.log("Button clicked!");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center self-center px-2.5 py-5 mt-2.5 w-full text-lg border border-solid bg-neutral-100 border-stone-500 max-w-[349px] rounded-[30px]">

          <Heading text="Вход" />
          <form onSubmit={handleFormSubmit}>
            <Input 
              placeholder="Введите логин" 
              value={login} 
              onChange={handleLoginChange} 
            />
            <Input 
              placeholder="Введите пароль" 
              type="password" 
              value={password} 
              onChange={handlePasswordChange} 
            />
            {error && <p className={styles.error}>{error}</p>}
            <Button
              buttonText="Войти  →"
              onButtonClick={() => handleFormSubmit({ preventDefault: () => {} } as React.FormEvent)}
              buttonStyles={styles.enter_button}
            />
          </form>
       
      </div>

      <div className="flex gap-5 justify-between mt-4">
        <Button
          buttonText="Регистрация"
          onButtonClick={handleButtonClick}
          buttonStyles={styles.purple_button}
        />
        <Button
          buttonText="Забыли пароль?"
          onButtonClick={handleButtonClick}
          buttonStyles={styles.purple_button}
        />
      </div>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d046c377868957423fae12d46d0124a415fd1e4ae8b75d4f6b67b0c359dc3f7?apiKey=131927e4f4ff43de8c424c10066bcbdc&"
        alt="Decorative image"
        className="self-stretch mt-7 w-full aspect-[1.03] max-w-[582spx]"
      />
    </>
  );
}

export default LoginWidget;
