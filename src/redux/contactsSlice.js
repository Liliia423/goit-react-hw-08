import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialContacts from '../data/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: initialContacts,
  },
  reducers: {
    addContact: {
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
