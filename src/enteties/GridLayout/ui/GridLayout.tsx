import { Footer, Header } from "@/shared";
import styles from "./GridLayout.module.scss";
import { MenuWidget } from "@/widgets";



const GridLayout: React.FC<GridLayoutProps> = ({ children }) => {
    return (
      <div className={styles.layout}>
        <Header />
        <MenuWidget />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default GridLayout;