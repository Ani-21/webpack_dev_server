import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!profileId) {
      return rejectWithValue('no id was provided');
    }

    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`);

      console.log(response);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue('Не удалось получить данные');
    }
  }
);
