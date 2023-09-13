import { StateSchema } from 'app/providers/store/config/StateSchema';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return error', () => {
    const error = 'smth went wrong ';

    const state: DeepPartial<StateSchema> = {
      profile: {
        error,
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual(error);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual('');
  });
});
