import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { StateSchema } from 'app/providers/store/config/StateSchema';
import { Dispatch } from '@reduxjs/toolkit';
import { userActions } from 'entities/user';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

describe('loginByUsername', () => {
  const userData = {
    username: '123',
    id: '1',
  };

  test('success login', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        data: userData,
      })
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Не удалось авторизоваться');
  });
});

// describe('loginByUsername', () => {
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;

//   const userData = {
//     username: '123',
//     id: '1',
//   };

//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });

//   test('success login', async () => {
//     mockedAxios.post.mockReturnValue(
//       Promise.resolve({
//         data: userData,
//       })
//     );
//     const action = loginByUsername({ username: '123', password: '123' });
//     const result = await action(dispatch, getState, undefined);

//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
//     expect(dispatch).toHaveBeenCalledTimes(3);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('fulfilled');
//     expect(result.payload).toEqual(userData);
//   });

//   test('error login', async () => {
//     mockedAxios.post.mockReturnValue(
//       Promise.resolve({
//         status: 403,
//       })
//     );
//     const action = loginByUsername({ username: '123', password: '123' });
//     const result = await action(dispatch, getState, undefined);

//     expect(dispatch).toHaveBeenCalledTimes(2);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('rejected');
//     expect(result.payload).toBe('Не удалось авторизоваться');
//   });
// });
