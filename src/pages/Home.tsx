import React from 'react'
import { GridLayout,  ProfBlock } from '@/enteties'
import HomeContentProvider from '@/providers'
import { ContentSection } from '@/shared'
import { useHomeContent } from '@/providers/HomeContentProvider/HomeContentProvider';
const HomePage: React.FC = () => {
  const { homeContent, profs } = useHomeContent();

  const historyContent = homeContent.find(content => content.label === 'История кафедры');
  const researchContent = homeContent.find(content => content.label === 'Научная деятельность');
  const specificProf = profs.find(prof => prof.surname === 'Ли');

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
          isAuthorized={true} // Измените на нужное значение
        />
      )}
      {historyContent && (
        <ContentSection
          label={historyContent.label}
          description={historyContent.description}
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