import { Meta, StoryFn } from '@storybook/react';

import { toastIcon, toastMessage } from '../consts';
import { toastHandler } from '../lib';

import { Toast } from './Toast';

export default {
  title: 'UI/Toast',
  component: Toast,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(toastIcon),
      },
      description: '토스트에 표시할 아이콘을 선택합니다.',
      defaultValue: 'caution',
    },
  },
} as Meta<typeof Toast>;

interface IToastStoryProps {
  icon: keyof typeof toastIcon;
}

const Template: StoryFn<IToastStoryProps> = ({ icon }) => {
  const showToast = (messageKey: keyof typeof toastMessage, icon: keyof typeof toastIcon) => {
    toastHandler(messageKey, icon);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Toast />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={() => showToast('reportSuccess', icon)}>신고 성공 토스트</button>
        <button onClick={() => showToast('reportFail', icon)}>신고 실패 토스트</button>
        <button onClick={() => showToast('networkError', icon)}>네트워크 오류 토스트</button>
        <button onClick={() => showToast('commonDeleteSuccess', icon)}>
          댓글 삭제 성공 토스트
        </button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  icon: 'caution',
};

export const FeedSirenToast = Template.bind({});
FeedSirenToast.args = {
  icon: 'feedSiren',
};

export const CheckOnSmallToast = Template.bind({});
CheckOnSmallToast.args = {
  icon: 'checkOnSmall',
};
