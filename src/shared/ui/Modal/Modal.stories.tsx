import type { Meta, StoryObj } from '@storybook/react';

import { Modal, ModalProps } from './Modal';
import './Modal.module.scss';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;

type Story = StoryObj<ModalProps & typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia possimus quasi soluta tempora provident sequi illum repellendus fuga consequatur. Error recusandae ipsa voluptate iste, nobis nesciunt placeat animi aperiam sed!',
  },
};
