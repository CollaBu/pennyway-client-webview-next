import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../app/globals.css';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { feedHandlers } from '../src/app/mocks/handlers';

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'iphone14promax',
    },
    msw: {
      handlers: {
        ...feedHandlers,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
