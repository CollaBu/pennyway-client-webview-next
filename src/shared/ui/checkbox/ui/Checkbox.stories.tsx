import { useArgs } from '@storybook/preview-api';
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
    isChecked: false,
  },
} satisfies Meta<typeof Checkbox>;

export const Default: Story = {
  render: (args: ICheckBox) => {
    const [{ isChecked }, updateArgs] = useArgs();

    const setIsChecked = (value: boolean) => {
      console.log(value);
      updateArgs({ isChecked: value });
    };

    return <Checkbox {...args} isChecked={isChecked} setIsChecked={setIsChecked} />;
  },
};
