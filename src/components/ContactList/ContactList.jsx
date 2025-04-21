import styles from './ContactList.module.css';
import { Contact } from '../Contact/Contact';

export default function ContactList() {
  return (
    <div className={styles['contact-list']}>
      <Contact />
    </div>
  );
}
