import * as React from "react";
import styles from "./Widget.module.scss";
import { imageUrl, buttonConfig } from "../config";
import { Button, Heading, Input } from "@/shared";
import { useAuth } from "../hooks";

function LoginWidget() {
  const {
    error,
    isLoading,
    inputs,
    handleSubmit,
    handleButtonClick,
    navigate,
  } = useAuth();

  return (
    <>
      <div className={styles.div}>
        <Heading text="Вход" />
        <form onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <Input
              key={index}
              placeholder={input.placeholder}
              type={input.type}
              value={input.value}
              onChange={input.onChange}
            />
          ))}
          {error && <p className={styles.error}>{error}</p>}
          <Button
            buttonText="Войти  →"
            onButtonClick={handleButtonClick}
            buttonStyles={styles.enter_button}
            disabled={isLoading}
          />
        </form>
      </div>

      <div className={styles.two_buttons}>
        {buttonConfig.map((config, index) => (
          <Button
            key={index}
            buttonText={config.buttonText}
            onButtonClick={() => navigate(config.path)}
            buttonStyles={styles.purple_button}
          />
        ))}
      </div>

      <img
        loading="lazy"
        src={imageUrl}
        alt="Decorative image"
        className={styles.img}
      />
    </>
  );
}

export default LoginWidget;
