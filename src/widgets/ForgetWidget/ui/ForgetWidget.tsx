import React, { useState } from 'react';
import Button from '@/shared/Button';
import styles from './ForgetWidget.module.scss';
import Input from '@/shared/Input';
import { handleRequestCode, handleSendCode } from '../actions';
import { createInputConfig, createButtonConfig, imageUrl } from '../config';
import { ForgetWidgetProps } from '../types';



const ForgetWidget: React.FC<ForgetWidgetProps> = ({ onCodeSubmit }) => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const inputs = createInputConfig(email, setEmail, verificationCode, setVerificationCode);
  const buttons = createButtonConfig(email, verificationCode, handleRequestCode, () => {
    handleSendCode(verificationCode);
    onCodeSubmit(email);
  });

  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        {inputs.map((input, index) => (
          <Input
            key={index}
            placeholder={input.placeholder}
            value={input.value}
            onChange={input.onChange}
          />
        ))}
        {buttons.map((button, index) => (
          <Button
            key={index}
            buttonText={button.buttonText}
            onButtonClick={button.onClick}
            buttonStyles={styles.button}
          />
        ))}
      </form>

      <img
        loading="lazy"
        src={imageUrl}
        alt=""
        className={styles.img}
      />
    </div>
  );
};

export default ForgetWidget;
