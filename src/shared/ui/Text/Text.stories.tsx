import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps, TextTheme } from './Text';
import './Text.module.scss';

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;

type Story = StoryObj<TextProps & typeof Text>;

export const Primary = {
  args: {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum',
  },
};

export const Error = {
  args: {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum',
    theme: TextTheme.ERROR,
  },
};

export const TextSample: Story = {
  args: {
    text: 'Lorem ipsum',
  },
};

export const TitleSample: Story = {
  args: {
    title: 'Lorem ipsum',
  },
};
