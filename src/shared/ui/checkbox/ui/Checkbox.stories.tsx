import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Checkbox, ICheckBox } from './Checkbox';

type Story = StoryObj<typeof Checkbox>;

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    shape: 'circleGraySmall',
    text: <span>Option 1</span>,
  },
} satisfies Meta<typeof Checkbox>;

export const Default: Story = {
  render: (args: ICheckBox) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return <Checkbox {...args} isChecked={isChecked} setIsChecked={setIsChecked} />;
  },
};

export const BoxPrimary: Story = {
  render: (args: ICheckBox) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
      <Checkbox {...args} isChecked={isChecked} setIsChecked={setIsChecked} shape="boxPrimary" />
    );
  },
};
