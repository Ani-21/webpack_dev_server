import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  data: undefined,
  isLoading: false,
  error: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;