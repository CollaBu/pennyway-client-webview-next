import { useEffect } from 'react';

import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { ReportModal } from './ReportModal';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ReportModal> = {
  title: 'ReportModal',
  component: ReportModal,
  argTypes: {
    isVisible: {
      control: 'boolean',
    },
  },
  args: {
    isVisible: true,
    feedId: 1,
    onCancel: fn,
    onReport: fn,
  },
};

export default meta;
type Story = StoryObj<typeof ReportModal>;

export const Default: Story = {
  args: {
    isVisible: true,
    feedId: 1,
    onCancel: fn,
    onReport: fn,
  },
  render: function Render(args) {
    const [{ isVisible }, updateArgs] = useArgs();

    useEffect(() => {
      updateArgs({ isVisible: args.isVisible });
    }, [args.isVisible, updateArgs]);

    const cancelReportModal = () => {
      updateArgs({ isVisible: false });
      args.onCancel();
    };

    const reportFeed = () => {
      updateArgs({ isVisible: false });
      args.onReport();
    };

    return (
      <ReportModal
        {...args}
        isVisible={isVisible}
        onCancel={cancelReportModal}
        onReport={reportFeed}
      />
    );
  },
};
