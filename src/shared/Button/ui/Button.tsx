import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ buttonText, onButtonClick, buttonStyles, disabled }) => {
  return (
    <button
      onClick={!disabled ? onButtonClick : undefined}
      className={buttonStyles} // className из вашего CSS модуля для общих стилей
      disabled={disabled} // Добавляем атрибут disabled
    >
      {buttonText}
    </button>
  );
};

export default Button;