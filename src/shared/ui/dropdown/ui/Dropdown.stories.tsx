import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '@/shared/ui/dropdown/ui/Dropdown';
import type { IOption } from '@/shared/ui/dropdown/ui/Dropdown';

import ArrowDownSmall from '/public/assets/icon/arrow-down-small.svg';

const options: IOption[] = [
  { title: 'Option 1', itemTitle: 'Item 1' },
  { title: 'Option 2', itemTitle: 'Item 2' },
  { title: 'Option 3', itemTitle: 'Item 3' },
];

type Story = StoryObj<typeof Dropdown>;

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    options,
    children: <button className="text-black text-h4m p-2 rounded">{options[0].itemTitle}</button>,
    defaultIndex: 0,
    menuPositionClass: 'top-[40px] left-1/2 -translate-x-1/2',
    selectOption: (index: number) => {
      console.log(index);
    },
  },
} satisfies Meta<typeof Dropdown>;

export const DefaultDropdown: Story = {
  render: (args) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(args.defaultIndex ?? 0);
    return (
      <Dropdown
        {...args}
        selectOption={(index: number) => {
          setSelectedOptionIndex(index);
        }}
      >
        <span className="text-black">{args.options[selectedOptionIndex]?.itemTitle}</span>
        <div className="absolute -right-6 top-1/2 -translate-y-1/2">
          <ArrowDownSmall width="24" height="24" />
        </div>
      </Dropdown>
    );
  },
};
