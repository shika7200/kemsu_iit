import { useState } from 'react';
import styles from './ForgetWidget.module.scss';
import { createButtonConfig, createInputConfig, imageUrl } from '../config';
import { ForgetWidgetProps } from '../types';
import { Input, Button } from '@/shared';

const ForgetWidget: React.FC<ForgetWidgetProps> = ({ onCodeSubmit }) => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  const inputs = createInputConfig(email, setEmail, verificationCode, setVerificationCode);
  const buttons = createButtonConfig(email, verificationCode, generatedCode, setGeneratedCode, setError, onCodeSubmit);

  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        {inputs.map((input, index) => (
          <div key={index} className={styles.inputButtonWrapper}>
            <Input
              placeholder={input.placeholder}
              value={input.value}
              onChange={input.onChange}
            />
            {index < buttons.length && (
              <Button
                buttonText={buttons[index].buttonText}
                onButtonClick={buttons[index].onClick}
                buttonStyles={styles.button}
              />
            )}
          </div>
        ))}
        {error && <p className={styles.error}>{error}</p>}
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