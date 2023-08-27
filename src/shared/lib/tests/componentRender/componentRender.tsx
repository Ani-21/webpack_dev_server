import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store/config/StateSchema';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (component: React.ReactNode, options: componentRenderOptions = {}) => {
  const { route = '/', initialState } = options;
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter>{component}</MemoryRouter>
    </StoreProvider>
  );
};
