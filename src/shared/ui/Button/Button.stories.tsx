import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps, ButtonSize, ButtonTheme } from './Button';
import { Theme } from 'app/providers/theme';
import 'app/styles/index.scss';
import './Button.module.scss';

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

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Clear Inverted',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outlined',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export const OutlineM: Story = {
  args: {
    children: 'Outlined',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export const OutlineL: Story = {
  args: {
    children: 'Outlined',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export const OutlineXL: Story = {
  args: {
    children: 'Outlined',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Bg',
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'Bg Inverted',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
  },
};
export const SquareL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
  },
};
export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.LIGHT}`}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.LIGHT}`}>
        <Story />
      </div>
    ),
  ],
};
