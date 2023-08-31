import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducer';
import { addContactReducer } from './ContactFormReduser';
import { deleteContactReducer } from './DeleteContactReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    addContact: addContactReducer,
    deleteContact: deleteContactReducer,
  },
});

export default store;
