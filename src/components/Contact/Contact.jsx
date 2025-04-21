import styles from './Contact.module.css';

export default function Contact({ name, phone, onDelete }) {
  return (
    <div className={styles['contact']}>
      <ul className={styles['name-and-phone']}>
        <li className={styles['name']}>
          <svg href="../../assets/profile.svg"></svg>
          <p>{name}</p>
        </li>
        <li className={styles['phone']}>
          <svg href="../../assets/phone.svg"></svg>
          <p>{phone}</p>
        </li>
      </ul>
      <button type="button" className={styles['delete-button']} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
