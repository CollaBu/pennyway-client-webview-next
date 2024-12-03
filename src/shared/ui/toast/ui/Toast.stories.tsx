import { Meta, StoryFn } from '@storybook/react';

import { toastIcon, TOAST_MESSAGES } from '../consts';
import { toastHandler } from '../lib';

import { Toast } from './Toast';

export default {
  title: 'Toast',
  component: Toast,
  argTypes: {
    message: {
      control: {
        type: 'select',
        options: Object.keys(TOAST_MESSAGES),
      },
      description: '토스트 메시지를 선택합니다.',
      defaultValue: 'reportSuccess',
    },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(toastIcon),
      },
      description: '토스트 아이콘을 선택합니다.',
      defaultValue: 'feedSiren',
    },
  },
} as Meta<typeof Toast>;

interface IToastStoryProps {
  message: keyof typeof TOAST_MESSAGES;
  icon: keyof typeof toastIcon;
}

const Template: StoryFn<IToastStoryProps> = ({ message, icon }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Toast />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          className="w-40 h-10 border border-black"
          onClick={() => toastHandler(message, icon)}
        >
          토스트 버튼
        </button>
      </div>
    </div>
  );
};

export const ReportSuccessToast = Template.bind({});
ReportSuccessToast.args = {
  message: 'REPORT_SUCCESS',
  icon: 'feedSiren',
};

export const ReportFailToast = Template.bind({});
ReportFailToast.args = {
  message: 'REPORT_FAIL',
  icon: 'caution',
};

export const NetworkErrorToast = Template.bind({});
NetworkErrorToast.args = {
  message: 'NETWORK_ERROR',
  icon: 'caution',
};

export const CommonDeleteSuccessToast = Template.bind({});
CommonDeleteSuccessToast.args = {
  message: 'COMMON_DELETE_SUCCESS',
  icon: 'checkOnSmall',
};
