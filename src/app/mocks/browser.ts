import { setupWorker } from 'msw/browser';

import { handlers } from './exam/handlers';

export const worker = setupWorker(...handlers);
