import { StateSchema } from 'app/providers/store/config/StateSchema';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
