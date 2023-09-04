import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'components/Api/Api';

export const requestContacts = createAsyncThunk(
  'contacts/requestContacts',
  async (_, thunkApi) => {
    try {
      const postData = await fetchContacts();
      return postData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const requestAddContact = createAsyncThunk(
  'contacts/requestAddContact',
  async (contact, thunkApi) => {
    try {
      const postData = await addContact(contact);
      console.log(postData);
      return postData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const requestDeleteContact = createAsyncThunk(
  'contacts/requestDeleteContact',
  async (id, thunkApi) => {
    try {
      const postData = await deleteContact(id);
      return postData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
