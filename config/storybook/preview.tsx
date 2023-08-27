import React from 'react';
import type { Preview } from '@storybook/react';
import { Theme, ThemeProvider } from '../../src/app/providers/theme';
import { BrowserRouter } from 'react-router-dom';

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, options) => (
      <BrowserRouter>
        <ThemeProvider initialTheme={options.theme}>
          <div className={`app ${options.theme}`}>
            <Story />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
};
