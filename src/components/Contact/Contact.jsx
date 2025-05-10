import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contact}>
      <ul className={styles['name-and-phone']}>
        <li className={styles.name}>
          <img src="/assets/profile.svg" alt="Profile Icon" className={styles.icon} />
          <p>{name}</p>
        </li>
        <li className={styles.phone}>
          <img src="/assets/phone.svg" alt="Phone Icon" className={styles.icon} />
          <p>{number}</p>
        </li>
      </ul>
      <button type="button" className={styles['delete-button']} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
