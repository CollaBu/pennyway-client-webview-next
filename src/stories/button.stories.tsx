import Button from '@/widgets/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    lagbel: '버튼',
    clickFn: fn(),
  },
};

export default meta;
