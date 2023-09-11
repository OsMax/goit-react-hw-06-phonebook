import React from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/phoneSlice';
import { getContacts } from 'redux/phoneSlice';

import { getFilter } from 'redux/filterSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const contactFilter = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
  );

  return (
    <div className={css.listContainer}>
      <ul className={css.contactList}>
        {contactFilter.map(contact => (
          <li className={css.listItem} key={contact.id}>
            <div className={css.contactInfo}>
              <span className={css.contactName}>{contact.name}: </span>
              <span className={css.contactNumber}>{contact.number}</span>
            </div>
            <button
              className={css.deletButton}
              onClick={() => dispatch(removeContact(contact.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
