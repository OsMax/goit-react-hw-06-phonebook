import { createSlice } from '@reduxjs/toolkit';
import initContacts from '../components/base.json';

export const phoneSlice = createSlice({
  name: 'phones',
  initialState: {
    contacts: initContacts,
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, setFilter } = phoneSlice.actions;
