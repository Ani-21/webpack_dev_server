import { StateSchema } from 'app/providers/store/config/StateSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors', () => {
  test('should return array of errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.NO_DATA, ValidateProfileError.INCORRECT_COUNTRY],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(['NO_DATA', 'INCORRECT_COUNTRY']);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
