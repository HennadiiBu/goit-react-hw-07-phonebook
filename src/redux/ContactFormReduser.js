import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContact } from 'components/Api/Api';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

export const requestAddContact = createAsyncThunk(
  'contacts/requestAddContact',
  async (contact, thunkApi) => {
    try {
      const postData = await addContact(contact);
      return postData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const addContactSlice = createSlice({
  name: 'addContact',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(requestAddContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(requestAddContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const addContactReducer = addContactSlice.reducer;
