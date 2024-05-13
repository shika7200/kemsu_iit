import Logo from "@/ui/Logo";
import * as React from "react";
import styles from "./Widget.module.scss";
import Button from "@/shared/Button";
import Heading from "@/shared/Heading";
import Footer from "@/shared/Footer";
import Input from "@/shared/Input";



function LoginWidget() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
    // Define what happens when the button is clicked
  };
  return (
    
     <>
     
        <Heading text="Вход" />
        <form>
          <Input placeholder="Введите логин" />
          <Input placeholder="Введите пароль" />
          
          <Button
            buttonText="Войти  →"
            onButtonClick={handleButtonClick}
            buttonStyles={styles.enter_button}
          />
         
        </form>
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
