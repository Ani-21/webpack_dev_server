import { Currency } from 'entities/currency';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { Country } from 'entities/country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  first: 'Ani',
  lastname: 'Kvikvinia',
  age: 22,
  currency: Currency.RUS,
  country: Country.RUSSIA,
  city: 'St.Petersburg',
  username: 'ani',
  avatar: '',
};

describe('', () => {
  test('should set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('should cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {};

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
    });
  });

  test('should update username', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: 'ani',
      },
    };

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'dummy' }))).toEqual({
      form: {
        username: 'dummy',
      },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
