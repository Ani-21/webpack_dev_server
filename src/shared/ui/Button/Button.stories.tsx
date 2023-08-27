import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps, ThemeButton } from './Button';
import { Theme } from 'app/providers/theme';
import 'app/styles/index.scss';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<ButtonProps & typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outlined',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};
