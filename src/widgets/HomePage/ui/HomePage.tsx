
import { GridLayout, NewsBlock, ProfBlock, ContactCard } from "@/enteties";
import { useHomeContent } from "@/providers";
import { ContentSection } from "@/shared";
import { isUserAuthenticated } from "@/utils";

const HomePage: React.FC = () => {
    const { homeContent, profs, news, contacts } = useHomeContent();
    if (!contacts) {
        console.log('Контакты ещё не загружены');
        return <div>Loading contacts...</div>;
      }
    console.log(contacts);
    const historyContent = homeContent.find(content => content.label === 'История кафедры');
    const researchContent = homeContent.find(content => content.label === 'Научная деятельность');
    const specificProf = profs.find(prof => prof.surname === 'Ли');
    const isAuth = isUserAuthenticated();
  
    const latestNews = news[0];
    const departmentContact = contacts && contacts.find(contact => contact.name === 'Кафедра');  // Находим контакт "Кафедра"

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
       {departmentContact && (
          <ContactCard
                    key={departmentContact.id}
                    name={departmentContact.name}
                    address={departmentContact.address}
                    phone={departmentContact.phone}
                    mail={departmentContact.mail} id={''}          />
        )}
      </GridLayout>
    );
};

export default HomePage;
