import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: 'text',
      description: '입력 필드에 표시될 플레이스홀더 텍스트를 설정합니다.',
    },
    disabled: {
      control: 'boolean',
      description: '입력 필드를 비활성화할지 여부를 설정합니다.',
      defaultValue: false,
    },
  },
} as Meta<typeof Input>;

interface IInputStoryProps {
  type: string;
  placeholder?: string;
  disabled?: boolean;
}

const Template: StoryFn<IInputStoryProps> = (args) => {
  const [value, setValue] = useState('');

  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: '텍스트를 입력하세요',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: '비활성화된 입력 필드',
  disabled: true,
};
