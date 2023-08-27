import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  test('should decrement value', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test('should increment value', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test('should worl with empty state', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
