import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter((contact) => {
    const [firstName, lastName] = contact.name.toLowerCase().split(' ');
    return firstName.startsWith(filter) || (lastName && lastName.startsWith(filter));
  });

  return (
    <div className={styles['contact-list']}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </div>
  );
}
