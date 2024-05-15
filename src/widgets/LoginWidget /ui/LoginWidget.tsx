import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Widget.module.scss";
import {  handleFormSubmitWrapper, handleButtonClickWrapper, handleNavigation } from "../actions";
import { imageUrl, buttonConfig, createInputConfig } from "../config";
import { Button, Heading, Input } from "@/shared";

function LoginWidget() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const inputs = createInputConfig(login, setLogin, password, setPassword, setError);

  return (
    <>
      <div className={styles.div}>
        <Heading text="Вход" />
        <form onSubmit={(e) => handleFormSubmitWrapper(e, login, password, setError, router)}>
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
            onButtonClick={() => handleButtonClickWrapper(login, password, setError, router)}
            buttonStyles={styles.enter_button}
          />
        </form>
      </div>

      <div className={styles.two_buttons}>
        {buttonConfig.map((config, index) => (
          <Button
            key={index}
            buttonText={config.buttonText}
            onButtonClick={() => handleNavigation(router, config.path)}
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

