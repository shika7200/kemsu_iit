/* eslint-disable @next/next/no-img-element */
import { useModal } from '../hooks/useModal';
import styles from './ProfBlock.module.scss';

const ProfBlock: React.FC<ProfBlockProps> = ({ avatar, surname, name, fathername, status, phone, mail, description, orientation, isAuthorized }) => {
  const {
    isModalOpen,
    handleImageClick,
    handleCloseModal,
    closeModal,
    isDescriptionModalOpen,
    handleDescriptionClick,
    handleCloseDescriptionModal,
    closeDescriptionModal
  } = useModal();

  return (
    <section className={styles.section}>
      <h4 className={styles.news_text}>{`${surname} ${name} ${fathername}`}</h4>
      <article className={`${styles.article} ${orientation === 'landscape' ? styles.landscape : ''}`}>
        <div className={styles.div_img}>
          <img
            loading="lazy"
            src={avatar}
            alt={`${surname} ${name}`}
            className={`${styles.img} ${orientation === 'landscape' ? styles['img-landscape'] : styles['img-portrait']}`}
            onClick={handleImageClick}
          />
          <div className={styles.text_container}>
            <p>Звание: {status}</p>
            {isAuthorized && (
              <>
                <p>Телефон: <a href={`tel:${phone}`} className={styles.link}>{phone}</a></p>
                <p>Email: <a href={`mailto:${mail}`} className={styles.link}>{mail}</a></p>
              </>
            )}
            <p className={styles.description_link} onClick={handleDescriptionClick}>Подробнее</p>
          </div>
        </div>
      </article>
      {isModalOpen && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modal_content}>
            <img src={avatar} alt={`${surname} ${name}`} className={styles.modal_img} onClick={closeModal} />
          </div>
        </div>
      )}
      {isDescriptionModalOpen && (
        <div className={styles.modal} onClick={handleCloseDescriptionModal}>
          <div className={styles.modal_content}>
            <div className={styles.modal_text}>
              <p>{description}</p>
            </div>
            <button className={styles.close_button} onClick={closeDescriptionModal}>Закрыть</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfBlock;
