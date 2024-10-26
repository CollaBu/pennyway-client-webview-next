import { setupWorker } from 'msw/browser';

import { searchHandlers, feedHandlers } from './handlers';

export const worker = setupWorker(...searchHandlers, ...feedHandlers);
