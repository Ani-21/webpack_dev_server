import type { Meta, StoryObj } from '@storybook/react';

import { ProfilePageProps } from './ProfilePage';
import ProfilePage from './ProfilePage';
import './ProfilePage.module.scss';

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
};

export default meta;

type Story = StoryObj<ProfilePageProps & typeof ProfilePage>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia possimus quasi soluta tempora provident sequi illum repellendus fuga consequatur. Error recusandae ipsa voluptate iste, nobis nesciunt placeat animi aperiam sed!',
  },
};
