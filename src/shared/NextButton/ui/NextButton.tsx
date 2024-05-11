import { NextButtonProps } from '../types';
import styles from './NextButton.module.scss';


const NextButton: React.FC<NextButtonProps> = ({ buttonText, onButtonClick }) => {
  return (
    <button
    onClick={onButtonClick}
    className={styles.buttonStyle}>
    {buttonText}
 
  </button>
  );
};

export default NextButton;
