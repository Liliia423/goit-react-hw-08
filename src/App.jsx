import { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import initialContacts from './data/contacts.json';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const filteredContacts = contacts.filter((c) => {
    const [firstName, lastName] = c.name.toLowerCase().split(' ');
    const searchTerm = filter.toLowerCase();
    return firstName.startsWith(searchTerm) || (lastName && lastName.startsWith(searchTerm));
  });

  return (
    <div className="page-container">
      <h1>Phonebook</h1>
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
