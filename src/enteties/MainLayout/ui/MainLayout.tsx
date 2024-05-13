import Footer from "@/shared/Footer";
import Header from "@/ui/Header";
import styles from "./MainLayout.module.scss"
import { MainLayoutProps } from "../types";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </>
    );
  };
  
  export default MainLayout;