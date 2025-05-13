import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalized = filter.toLowerCase().trim();
    return contacts.filter((contact) => {
      const [firstName, lastName] = contact.name.toLowerCase().split(' ');
      return firstName.startsWith(normalized) || (lastName && lastName.startsWith(normalized));
    });
  },
);
