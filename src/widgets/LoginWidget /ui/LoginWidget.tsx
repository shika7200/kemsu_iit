import Button from "@/shared/Button"
import styles from "./Widget.module.scss"
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });
const LoginWidget = () => {

    const handleButtonClick = () => {
        console.log('Button clicked!');
        // Define what happens when the button is clicked
      };
  return (
    <main
    className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  >
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    <Button buttonText="Войти  →" onButtonClick={handleButtonClick}  buttonStyles={styles.enter_button}/>
    <Button buttonText="Регистрация" onButtonClick={handleButtonClick}  buttonStyles={styles.purple_button}/>
    <Button buttonText="Забыли пароль?" onButtonClick={handleButtonClick}  buttonStyles={styles.purple_button}/>
    </div>
    </main>
  )
}

export default LoginWidget