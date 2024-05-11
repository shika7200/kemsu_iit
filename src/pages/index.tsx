import Image from "next/image";
import { Inter } from "next/font/google";
import NextButton from "@/shared/NextButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
    // Define what happens when the button is clicked
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <NextButton buttonText="Войти →" onButtonClick={handleButtonClick}  />
      </div>
    </main>
  );
}
