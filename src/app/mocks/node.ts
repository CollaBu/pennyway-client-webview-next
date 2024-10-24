import { setupServer } from 'msw/node';

import { handlers } from './exam/handlers';

export const server = setupServer(...handlers);
