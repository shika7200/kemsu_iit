export type ButtonProps = {
  buttonText: string;
  onButtonClick: () => void;
  buttonStyles: string; 
  disabled?: boolean; // Проп для дополнительных стилей
}