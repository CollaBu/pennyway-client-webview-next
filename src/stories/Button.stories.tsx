import Button from '@/widgets/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};
type Story = StoryObj<typeof Button>;

meta.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/TW2Z3ntJR9C4QIbuM81lcF/%5BPennyway%5D-UI?node-id=2225-46321&t=mw9c4vJzvMiEMrQL-1',
  },
};

export const Primary: Story = {
  args: {
    label: '버튼',
    onClick: fn(),
  },
};

export default meta;
