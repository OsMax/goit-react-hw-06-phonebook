import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/phoneSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const stateChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'number': {
        setNumber(value);
        break;
      }
      default:
        break;
    }
  };

  const getSubmitData = e => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) {
      window.alert('Please complete all fields');
      return;
    }
    dispatch(addContact({ ...{ id: nanoid() }, ...{ name, number } }));
    // onSubmitData({ ...{ id: nanoid() }, ...{ name, number } });
    setName('');
    setNumber('');
    e.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={getSubmitData}>
      <label className={css.label}>
        <span className={css.labelText}>Name</span>
        <input
          className={css.input}
          name="name"
          type="text"
          value={name}
          onChange={stateChange}
          pattern="[A-Za-zА-Яа-яЁё]{2,}[ ][A-Za-zА-Яа-яЁё]{2,}"
          placeholder="Name Surname (min 2 symbols for each)"
        />
      </label>
      <label className={css.label}>
        <span className={css.labelText}>Number</span>
        <input
          className={css.input}
          name="number"
          type="text"
          value={number}
          onChange={stateChange}
          pattern="\d{3}[\-]\d{2}[\-]\d{2}"
          placeholder="111-11-11"
        />
      </label>
      <button className={css.submitBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
