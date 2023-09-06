import { Provider } from 'react-redux';
import { createReduxStore } from '..';
import { StateSchema } from '../config/StateSchema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { NavigateOptions, To, useNavigate } from 'react-router-dom';

interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const navigate = useNavigate();

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate
  );

  return <Provider store={store}>{children}</Provider>;
};
