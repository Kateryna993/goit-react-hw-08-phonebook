import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../services/auth-api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = createAsyncThunk('users/signup', async credentials => {
  try {
    const user = await authAPI.registerUser(credentials);
    token.set(user.token);
    return user;
  } catch (error) {
    return error.message;
  }
});

const loginUser = createAsyncThunk('users/login', async credentials => {
  try {
    const user = await authAPI.loginUser(credentials);
    token.set(user.token);
    return user;
  } catch (error) {
    return error.message;
  }
});

const logoutUser = createAsyncThunk('users/logout', async () => {
  try {
    await authAPI.logoutUser();
    token.unset();
  } catch (error) {
    return error.message;
  }
});

const fetchCurrentUser = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);
    const persistedToken = state.auth.token;
    console.log(persistedToken);
    if (persistedToken === null) {
      console.log('No token, exit from fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const currentUser = await authAPI.fetchCurrentUser();
      // console.log(data);
      return currentUser;
    } catch (error) {
      return error.message;
    }
  },
);

const operations = {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
};

export default operations;
