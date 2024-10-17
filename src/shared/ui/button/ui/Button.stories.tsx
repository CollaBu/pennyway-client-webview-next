import { fn } from '@storybook/test';

import { Button } from './Button';

import type { StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;

export default {
  title: 'Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    type: 'default',
    label: 'button Title',
    onClick: fn(),
  },
};

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};
