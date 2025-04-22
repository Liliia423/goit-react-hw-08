import styles from './Contact.module.css';

export default function Contact({ name, number, onDelete }) {
  return (
    <div className={styles['contact']}>
      <ul className={styles['name-and-phone']}>
        <li className={styles['name']}>
          <img src="/assets/profile.svg" alt="Profile Icon" className={styles.icon} />
          <p>{name}</p>
        </li>
        <li className={styles['phone']}>
          <img src="/assets/phone.svg" alt="Phone Icon" className={styles.icon} />
          <p>{number}</p>
        </li>
      </ul>
      <button type="button" className={styles['delete-button']} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
