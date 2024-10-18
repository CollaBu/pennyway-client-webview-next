import { fn } from '@storybook/test';

import { Modal } from './Modal';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Modal>;

export default {
  title: 'Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    isVisible: true,
    onCancel: fn(),
    onConfirm: fn(),
  },
} satisfies Meta<typeof Modal>;

export const GoBackModal: Story = {
  args: { type: 'goBack' },
};

export const DeletePostModal: Story = {
  args: { type: 'deletePost' },
};

export const DeleteCommentModal: Story = {
  args: { type: 'deleteComment' },
};
