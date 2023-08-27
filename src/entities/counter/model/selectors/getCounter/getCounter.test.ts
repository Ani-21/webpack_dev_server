import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';
import { StateSchema } from 'app/providers/store/config/StateSchema';

describe('getCounter', () => {
  test('Shoud return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
