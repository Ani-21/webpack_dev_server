import { StateSchema } from 'app/providers/store/config/StateSchema';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
