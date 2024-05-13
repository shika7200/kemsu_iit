import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // You can include logic to determine the condition for the redirect
    router.push('/Login');
  }, []); 

  return <div>Загрузка...</div>;
}
