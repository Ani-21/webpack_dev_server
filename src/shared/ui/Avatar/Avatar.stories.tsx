import type { Meta, StoryObj } from '@storybook/react';

import Avatar, { AvatarProps } from './Avatar';
import { Theme } from 'app/providers/theme';
import 'app/styles/index.scss';
import './Button.module.scss';
import AvatarImg from './avatar.png';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;

type Story = StoryObj<AvatarProps & typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};
