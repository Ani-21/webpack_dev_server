import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { User, userActions } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig>(
  'login/loginByUsername',
  async (authData: LoginByUsernameProps, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<User>('/login', authData);
      extra.navigate('/about');
      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue('Не удалось авторизоваться');
    }
  }
);
