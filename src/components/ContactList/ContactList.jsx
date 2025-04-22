import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={styles['contact-list']}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} onDelete={() => onDelete(id)} />
      ))}
    </div>
  );
}
