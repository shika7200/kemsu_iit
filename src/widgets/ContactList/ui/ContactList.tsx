import styles from "./ContactList.module.scss";
import useContacts from "../hooks";
import { ContactCard } from '@/enteties';


const ContactList: React.FC = () => {
  const { contacts } = useContacts();

  return (
    <div className={styles.container}>
      {contacts.map((contact) => (
        <ContactCard 
          key={contact.id}
          id={contact.id}
          name={contact.name}
          address={contact.address}
          phone={contact.phone}
          mail={contact.mail}
        />
      ))}
    </div>
  );
};

export default ContactList;
