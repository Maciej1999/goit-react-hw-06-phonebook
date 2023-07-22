import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { addContact, deleteContactById } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/selectors';
import css from './Phonebook.module.css';
export const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandle = (e, newContact) => {
    e.preventDefault();
    const filtered =
      contacts.find(
        c => c.name.toLowerCase() === newContact.name.toLowerCase()
      ) || 0;
    if (filtered !== 0) {
      dispatch(setFilter(filtered.name));
      alert(`You aready have ${filtered.name} in your phonebook.

      ${filtered.name} ${filtered.number}`);
      return;
    }
    const filteredNum =
      contacts.find(
        c => c.number.toLowerCase() === newContact.number.toLowerCase()
      ) || 0;
    if (filteredNum !== 0) {
      dispatch(setFilter(filteredNum.number));
      alert(`You aready have this number in your phonebook.
      
      ${filteredNum.name} ${filteredNum.number}`);
      setNumber(filteredNum.number);
      return;
    }
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
    setFilter('');
  };
  const deleteContactHandle = (e, contact) => {
    e.preventDefault();
    dispatch(deleteContactById(contact.id));
  };
  return (
    <div className={css.phonebook}>
      <Title title="Phonebook" />

      <ContactForm
        name={name}
        number={number}
        addContactHandle={addContactHandle}
        setName={setName}
        setNumber={setNumber}
      />

      <Title title="Contacts" />
      <ContactList
        contacts={contacts}
        deleteContactHandle={deleteContactHandle}
      />
    </div>
  );
};
