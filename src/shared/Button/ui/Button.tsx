import React from 'react';
import { ButtonProps } from '../types';


const Button: React.FC<ButtonProps> = ({ buttonText, onButtonClick, buttonStyles }) => {
  // className использует класс из модуля CSS
  // style принимает объект стилей, переданный через props
  return (
    <button
      onClick={onButtonClick}
      className={buttonStyles} // className из вашего CSS модуля для общих стилей
     
    >
      {buttonText}
    </button>
  );
};

export default Button;