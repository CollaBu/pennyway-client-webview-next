import { setupServer } from 'msw/node';

import { examHandlers } from '../mocks/handlers/examHandler';

export const server = setupServer(...examHandlers);
