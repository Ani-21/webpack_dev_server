import { StateSchema } from 'app/providers/store/config/StateSchema';

export const getCounter = (state: StateSchema) => state.counter;
