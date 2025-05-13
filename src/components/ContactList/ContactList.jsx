import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles['contact-list']}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
