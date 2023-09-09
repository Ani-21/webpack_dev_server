import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('', () => {
  test('should return username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'username123' };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('username123'))).toEqual({
      username: 'username123',
    });
  });

  test('should return password', () => {
    const state: DeepPartial<LoginSchema> = { password: 'pwd123' };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('pwd123'))).toEqual({ password: 'pwd123' });
  });
});
