import { StateSchema } from 'app/providers/store/config/StateSchema';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
