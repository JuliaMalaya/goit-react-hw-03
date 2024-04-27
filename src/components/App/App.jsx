import { useState, useEffect } from 'react';
import listContacts from '/src/contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

const LS_KEY = 'saved-contacts';
 
function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(LS_KEY)) ?? listContacts;
  });
  
  const [filter, setFilter] = useState('');
  
  function addContact(newContact) {
    setContacts(prevContacts => [...prevContacts, newContact]);
  }

  function onDeleteContact(contactId) {
    setContacts(prevContacts =>
      prevContacts.filter(prevContact => prevContact.id !== contactId)
    );
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  useEffect(() => {
   localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox onSearch={onChangeFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </div>
  );
}
export default App;