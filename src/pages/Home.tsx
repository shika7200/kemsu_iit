import React from 'react'
import { GridLayout,  NewsBlock,  ProfBlock } from '@/enteties'
import { HomeContentProvider } from '@/providers/HomeContentProvider/HomeContentProvider';
import { ContentSection } from '@/shared'
import { useHomeContent } from '@/providers/HomeContentProvider/HomeContentProvider';
import { isUserAuthenticated } from '@/utils';


const HomePage: React.FC = () => {

  const { homeContent, profs, news } = useHomeContent();

  const historyContent = homeContent.find(content => content.label === 'История кафедры');
  const researchContent = homeContent.find(content => content.label === 'Научная деятельность');
  const specificProf = profs.find(prof => prof.surname === 'Ли');
  const isAuth = isUserAuthenticated();

  // Найти новейший элемент news
  const latestNews = news[0];

  return (
    <GridLayout>
      {specificProf && (
        <ProfBlock
          key={specificProf.id}
          avatar={`https://mats-kemsu.pockethost.io/api/files/${specificProf.collectionId}/${specificProf.id}/${specificProf.avatar}`}
          surname={specificProf.surname}
          name={specificProf.name}
          fathername={specificProf.fathername}
          status={specificProf.status}
          phone={specificProf.phone}
          mail={specificProf.mail}
          description={specificProf.description}
          orientation={specificProf.orientation}
          isAuthorized={isAuth} // Измените на нужное значение
        />
      )}
      {historyContent && (
        <ContentSection
          label={historyContent.label}
          description={historyContent.description}
        />
      )}
       {latestNews && (
        <NewsBlock
          key={latestNews.id}
          title={latestNews.title}
          imgSrc={latestNews.imgSrc}
          text={latestNews.text}
          date={latestNews.date}
          orientation={latestNews.orientation}
        />
      )}
      {researchContent && (
        <ContentSection
          label={researchContent.label}
          description={researchContent.description}
        />
      )}
      
     
    </GridLayout>
  );
};

const Home: React.FC = () => (
  <HomeContentProvider>
    <HomePage />
  </HomeContentProvider>
);

export default Home;