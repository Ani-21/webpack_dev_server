import { StateSchema } from 'app/providers/store/config/StateSchema';

export const getLoginState = (state: StateSchema) => state.loginForm;
