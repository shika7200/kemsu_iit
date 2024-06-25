import  { useEffect } from 'react';
import { GridLayout, NewsBlock, ProfBlock, ContactCard, SimpleProfList } from "@/enteties";
import { useHomeContent } from "@/providers";
import { ContentSection } from "@/shared";
import { isUserAuthenticated } from "@/utils";
import { SimpleDirectionWidget } from '@/widgets';

const HomePage: React.FC = () => {
  const { homeContent, profs, news, contacts, directions, fetchDirections } = useHomeContent();

  useEffect(() => {
    fetchDirections();
  }, [fetchDirections]);

  if (!contacts) {
    console.log('Контакты ещё не загружены');
    return <div>Loading contacts...</div>;
  }
  const filteredProfs = profs.filter(prof => prof.name !== "Ли");
  const historyContent = homeContent.find(content => content.label === 'История кафедры');
  const researchContent = homeContent.find(content => content.label === 'Научная деятельность');
  const specificProf = profs.find(prof => prof.surname === 'Ли');
  const isAuth = isUserAuthenticated();
  const latestNews = news[0];
  const departmentContact = contacts && contacts.find(contact => contact.name === 'Кафедра');

  const bachelors = directions.filter(direction => !direction.Master);
  const masters = directions.filter(direction => direction.Master);

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
          isAuthorized={isAuth}
        />
      )}
      {historyContent && (
        <ContentSection
          label={historyContent.label}
          description={historyContent.description}
        />
      )}
      <SimpleDirectionWidget bachelors={bachelors} masters={masters} />
      {departmentContact && (
        <ContactCard
          key={departmentContact.id}
          name={departmentContact.name}
          address={departmentContact.address}
          phone={departmentContact.phone}
          mail={departmentContact.mail}
          id={''}
        />
      )}
      
      {researchContent && (
        <ContentSection
          label={researchContent.label}
          description={researchContent.description}
        />
      )}
      
      
      <SimpleProfList profs={filteredProfs} />
      {latestNews && (
        <NewsBlock
          key={latestNews.id}
          title={"Последние новости"}
          imgSrc={latestNews.imgSrc}
          text={latestNews.text}
          date={latestNews.date}
          orientation={latestNews.orientation}
        />
      )}
    </GridLayout>
  );
};

export default HomePage;


