import styles from './NewsWidget.module.scss';
import { NewsBlock } from '@/enteties';
import useFetchNews from '../hooks';


const NewsWidget: React.FC = () => {
  const { news, loading, error } = useFetchNews();

  if (loading) {
    return (
      <div className={styles.main}>
    <p>Загрузка...</p>
    </div>);
  }

  if (error) {
    console.error("Error in NewsWidget component:", error);
    return (
      <div className={styles.main}>
    <p>Ошибка загрузки новостей</p>
    </div>
    );
  }

  console.log("Rendering NewsWidget with news:", news);

  return (
    <div className={styles.main}>
      {news.map((newsItem) => (
        <NewsBlock
          key={newsItem.id}
          title={newsItem.article}
          imgSrc={`https://mats-kemsu.pockethost.io/api/files/${newsItem.collectionId}/${newsItem.id}/${newsItem.image}`}
          text={newsItem.text}
          date={new Date(newsItem.created).toLocaleDateString('ru-RU')}
          orientation={newsItem.orientation}
        />
      ))}
    </div>
  );
};

export default NewsWidget;
