import { createSlice } from '@reduxjs/toolkit';
import initContacts from '../components/base.json';
import storage from 'redux-persist/lib/storage';

export const phoneSlice = createSlice({
  name: 'phones',
  initialState: {
    contacts: initContacts,
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
  },
});

export const { addContact, removeContact } = phoneSlice.actions;
export const getContacts = state => state.persistRed.phones.contacts;
