import { StateSchema } from 'app/providers/store/config/StateSchema';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
