import styles from './ForgetWidget.module.scss';
import { imageUrl } from '../config';
import { ForgetWidgetProps } from '../types';
import { Input, Button } from '@/shared';
import { useForgetWidget } from '../hooks';

const ForgetWidget: React.FC<ForgetWidgetProps> = ({ onCodeSubmit }) => {
  const {
    inputs,
    buttons,
    error,
    timer,
    isRequestDisabled,
  } = useForgetWidget(onCodeSubmit);

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
                disabled={buttons[index].disabled}
              />
            )}
          </div>
        ))}
        {error && <p className={styles.error}>{error}</p>}
      </form>
      {isRequestDisabled && <p className={styles.timer}>Запросить код можно будет через: {timer} секунд</p>}
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



