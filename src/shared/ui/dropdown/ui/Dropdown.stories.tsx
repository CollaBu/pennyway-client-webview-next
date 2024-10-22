import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '.';

import type { IOption } from '.';

import ArrowDownSmall from '/public/assets/icon/arrow-down-small.svg';

const options: IOption[] = [
  { title: 'Option 1', itemTitle: 'Item 1' },
  { title: 'Option 2', itemTitle: 'Item 2' },
  { title: 'Option 3', itemTitle: 'Item 3' },
];

type Story = StoryObj<typeof Dropdown>;

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    options,
    children: <button className="text-black text-h4m p-2 rounded">{options[0].itemTitle}</button>,
    menuPositionClass: 'top-[40px] left-1/2 -translate-x-1/2',
    selectOption: (index: number) => {
      console.log(index);
    },
  },
} satisfies Meta<typeof Dropdown>;

export const Default: Story = {
  render: (args) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const selectOption = (index: number) => {
      setSelectedOptionIndex(index);
    };
    return (
      <Dropdown {...args} selectOption={selectOption}>
        <span className="text-black">{args.options[selectedOptionIndex]?.itemTitle}</span>
        <div className="absolute -right-6 top-1/2 -translate-y-1/2">
          <ArrowDownSmall width="24" height="24" />
        </div>
      </Dropdown>
    );
  },
};
