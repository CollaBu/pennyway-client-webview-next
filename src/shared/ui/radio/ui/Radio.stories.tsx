import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { radioShapes } from '../consts';

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
  argTypes: {
    shape: {
      control: {
        type: 'select',
        options: Object.keys(radioShapes),
      },
    },
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

export const BoxPrimary: Story = {
  render: (args: IRadio) => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    const changeSelect = (value: string) => {
      setSelectedValue(value);
    };

    return (
      <div>
        <Radio
          {...args}
          shape="boxPrimary"
          isSelected={selectedValue === 'option1'}
          changeSelected={() => changeSelect('option1')}
          name="radioBoxPrimaryStory"
          text={<span>Option 1</span>}
        />
        <Radio
          {...args}
          shape="boxPrimary"
          isSelected={selectedValue === 'option2'}
          changeSelected={() => changeSelect('option2')}
          name="radioBoxPrimaryStory"
          text={<span>Option 2</span>}
        />
      </div>
    );
  },
};
