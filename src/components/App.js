import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList/ContactList';
import initContacts from './base.json';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? initContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    if (!contacts.length) {
      localStorage.removeItem('contacts');
    }
  }, [contacts]);

  const onDeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const findContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const setNewFilter = e => {
    setFilter(e.target.value);
  };

  const checkNewContat = newContact => {
    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      window.alert(`Contacts name "${newContact.name}" already exists`);
      return false;
    } else if (contacts.find(contact => contact.number === newContact.number)) {
      window.alert(`Contacts number "${newContact.number}" already exists`);
      return false;
    }
    return true;
  };

  const onSubmitData = newContact => {
    if (checkNewContat(newContact)) {
      setContacts([...contacts, newContact]);
      window.alert(
        `Contacts added: \n Name: ${newContact.name}\n Number: ${newContact.number}\n`
      );
    }
  };

  return (
    <div className="appContainer">
      <h1>Phonebook</h1>
      <ContactForm onSubmitData={onSubmitData} />
      <h2>Contacts</h2>
      <Filter setNewFilter={setNewFilter} />
      <ContactList
        contacts={findContacts()}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
