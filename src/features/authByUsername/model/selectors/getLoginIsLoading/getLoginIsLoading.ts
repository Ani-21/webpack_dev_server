import { StateSchema } from 'app/providers/store/config/StateSchema';

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
