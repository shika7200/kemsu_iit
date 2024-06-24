import styles from "./ContactList.module.scss";
import useContacts from "../hooks";

const ContactList: React.FC = () => {
  const { contacts } = useContacts();

  return (
    <div className={styles.container}>
      {contacts.map((contact) => (
        <div key={contact.id} className={styles.contact}>
          <h3>{contact.name}</h3>
          <p>
            Адрес: {contact.address}
            <br />
            Контактный телефон:{" "}
            <br/>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            <br />
            Электронная почта:{" "}
            <a href={`mailto:${contact.mail}`}>{contact.mail}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
