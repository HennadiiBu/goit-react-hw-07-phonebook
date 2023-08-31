import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів
  reducers: {
    addNewContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      // state.contacts.filter(elem => elem.id !== action.payload);
      const deletedContactIndex = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(deletedContactIndex, 1);
    },
    findContact(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addNewContact, deleteContact, findContact, filterContacts } =
  contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
