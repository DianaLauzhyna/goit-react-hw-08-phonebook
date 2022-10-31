import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosConfig from '../service/axiosConfig'

export const fetchTasks = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axiosConfig.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      await axiosConfig.delete(`/contacts/${contactID}`);
      return contactID;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axiosConfig.post(`/contacts`, contact);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, ...contact }, thunkAPI) => {
    try {
      const response = await axiosConfig.patch(`/contacts/${id}`, contact);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const findByName = () => {};
