import { StateSchema } from 'app/providers/store/config/StateSchema';
import { getLoginUsername } from './getLoginUsername';
import {} from '@reduxjs/toolkit';

describe('getLoginUsername', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'Test user',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('Test user');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
