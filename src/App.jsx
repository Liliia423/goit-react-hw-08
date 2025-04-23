import { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import initialContacts from './data/contacts.json';

const LOCAL_STORAGE_KEY = 'my-contacts';

function App() {
  const [contacts, setContacts] = useState(() => {
    // 🧠 Спроба зчитати з localStorage
    const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedContacts ? JSON.parse(storedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter((c) => {
    const [firstName, lastName] = c.name.toLowerCase().split(' ');
    const searchTerm = filter.toLowerCase();
    return firstName.startsWith(searchTerm) || (lastName && lastName.startsWith(searchTerm));
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="page-container">
      <h1 className="main-header">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
