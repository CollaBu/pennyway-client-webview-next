import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Radio, IRadio } from './Radio';

type Story = StoryObj<typeof Radio>;

export default {
  title: 'Radio',
  component: Radio,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    shape: 'circleGraySmall',
    name: 'radioStory',
    text: <span>Option 1</span>,
  },
} satisfies Meta<typeof Radio>;

export const Default: Story = {
  render: (args: IRadio) => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleChange = (value: string) => {
      setSelectedValue(value);
    };

    return (
      <div>
        <Radio
          {...args}
          isSelected={selectedValue === 'option1'}
          changeSelected={() => handleChange('option1')}
          name="radioDefaultStory"
          text={<span>Option 1</span>}
        />{' '}
        <Radio
          {...args}
          isSelected={selectedValue === 'option2'}
          changeSelected={() => handleChange('option2')}
          name="radioDefaultStory"
          text={<span>Option 2</span>}
        />
      </div>
    );
  },
};
