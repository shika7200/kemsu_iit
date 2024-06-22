import { Footer, Header } from "@/ui";
import styles from "./NewsLayout.module.scss";
import { Menu } from "@/features";


const NewsLayout: React.FC<NewsLayoutProps> = ({ children }) => {
    return (
      <div className={styles.layout}>
        <Header />
        <Menu />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default NewsLayout;