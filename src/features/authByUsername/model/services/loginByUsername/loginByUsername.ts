import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData: LoginByUsernameProps, thunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkApi.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue('Не удалось авторизоваться');
    }
  }
);
