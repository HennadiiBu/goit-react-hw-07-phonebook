import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {  deleteContact } from 'components/Api/Api';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

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

const deleteContactSlice = createSlice({
  name: 'deleteContact',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(requestDeleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(requestDeleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const deleteContactReducer = deleteContactSlice.reducer;
