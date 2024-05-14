import React, { useState } from "react";
import Button from "@/shared/Button";
import styles from "./ForgetWidget.module.scss";
import Input from "@/shared/Input";

function ForgetWidget() {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  const handleRequestCode = () => {
    console.log("Request code for email:", email);
    // Add logic to send a verification code to the email
  };

  const handleSendCode = () => {
    console.log("Send verification code:", verificationCode);
    // Add logic to verify the code
  };

  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <Input
          placeholder="Введите адрес эл. почты"
          value={email}
          onChange={handleEmailChange}
        />
        <Button
          buttonText="Запросить код восстановления"
          onButtonClick={handleRequestCode}
          buttonStyles={styles.button}
        />
        <Input
          placeholder="Введите код восстановления"
          value={verificationCode}
          onChange={handleVerificationCodeChange}
        />
        <Button
          buttonText="Отправить код восстановления"
          onButtonClick={handleSendCode}
          buttonStyles={styles.button}
        />
      </form>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/48528724a42e99712f1130fb6695cff27b5a3c8b425124951b39136fc90ee132?apiKey=131927e4f4ff43de8c424c10066bcbdc&"
        alt=""
        className="mt-7 w-full aspect-[1.14]"
      />
    </div>
  );
}

export default ForgetWidget;
