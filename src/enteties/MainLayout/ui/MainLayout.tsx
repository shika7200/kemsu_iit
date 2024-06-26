import styles from "./MainLayout.module.scss"
import { MenuWidget } from "@/widgets";
import { Footer, Header } from "@/shared";


const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        
        <div className={styles.layout}>
        <Header />
        <MenuWidget />
        <main className={styles.main}>{children}</main>
        <Footer />
        </div>
    );
  };
  
  export default MainLayout;