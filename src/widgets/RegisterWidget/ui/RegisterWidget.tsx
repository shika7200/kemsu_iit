import Input from "@/shared/Input";
import * as React from "react";
import styles from "./RegisterWidget.module.scss"
import Button from "@/shared/Button";
import Heading from "@/shared/Heading";


const RegisterWidget: React.FC = () => {
  const inputFields = [
    { label: "Введите имя" },
    { label: "Введите фамилию" },
    { label: "Введите телефон" },
    { label: "Придумайте логин" },
    { label: "Придумайте пароль" },
  ];

  const handleButtonClick = () => {
    console.log("Button clicked!");
    // Define what happens when the button is clicked
  };
  return (
    <div className={styles.div}>
     
      
        <Heading  text="Регистрация"/>
        {inputFields.map((field, index) => (
        <Input key={index} placeholder={field.label}/>
        ))}
        <Button  buttonText={"создать"} buttonStyles={styles.create_button} onButtonClick={handleButtonClick}/>
    
      
    </div>
  );
};

export default RegisterWidget;