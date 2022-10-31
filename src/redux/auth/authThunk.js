import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosConfig from '../service/axiosConfig'

const setAuthHeader = token => {
  axiosConfig.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axiosConfig.defaults.headers.common.Authorization = '';
};
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (user, thunkAPI) => {
    try {
      const response = await axiosConfig.post('/users/signup', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/logInUser',
  async (user, thunkAPI) => {
    try {
      const response = await axiosConfig.post('/users/login', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, thunkAPI) => {
    try {
      const response = await axiosConfig.post('/users/logout');
      clearAuthHeader();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axiosConfig.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
