import { StateSchema } from 'app/providers/store/config/StateSchema';
import { getLoginIsLoading } from './getLoginIsLoading';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(undefined);
  });
});