import { createSelector } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filters;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.name.toLowerCase())
//     );
//   }
// );

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const fuse = new Fuse(contacts, {
      keys: ['name', 'number'], // Поля для пошуку
      includeScore: true,
      threshold: 0.2,
    });
    return filter.query !== '' ? fuse.search(filter.query).map(result => result.item) : contacts;
  }
);
