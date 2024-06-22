import { Footer, Header } from "@/ui";
import styles from "./NewsLayout.module.scss";
import { MenuWidget } from "@/widgets";



const NewsLayout: React.FC<NewsLayoutProps> = ({ children }) => {
    return (
      <div className={styles.layout}>
        <Header />
        <MenuWidget />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default NewsLayout;