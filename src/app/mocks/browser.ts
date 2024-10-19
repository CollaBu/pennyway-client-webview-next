import { setupWorker } from 'msw/browser';

import { examHandlers } from './handlers/examHandler';

export const worker = setupWorker(...examHandlers);
