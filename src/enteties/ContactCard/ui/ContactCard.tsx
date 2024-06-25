import { ContactCardProps } from "../types";
import styles from './ContactCard.module.scss';

const ContactCard: React.FC<ContactCardProps> = ({ id, name, address, phone, mail }) => {
    return (
      <div key={id} className={styles.contact}>
        <h3>{name}</h3>
        <p>
          Адрес: {address}
          <br />
          Контактный телефон: 
          <br />
          <a href={`tel:${phone}`}>{phone}</a>
          <br />
          Электронная почта: 
          <a href={`mailto:${mail}`}>{mail}</a>
        </p>
      </div>
    );
  };
  
  export default ContactCard;