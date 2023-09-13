import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

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

const errors = [
  ValidateProfileError.INCORRECT_USER_DATA,
  ValidateProfileError.INCORRECT_AGE,
  ValidateProfileError.INCORRECT_COUNTRY,
];

describe('validateProfileData', () => {
  test('success', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('without age', () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('without country', () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('withouy name, age and country', () => {
    const result = validateProfileData({ ...data, first: '', lastname: '', age: undefined, country: undefined });

    expect(result).toEqual(errors);
  });
});
