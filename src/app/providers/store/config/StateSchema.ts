import { AnyAction, CombinedState, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/profile';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/authByUsername';

export interface StateSchema {
  user: UserSchema;

  // Async reducer
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => void;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
