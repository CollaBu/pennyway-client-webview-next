import { http, HttpResponse } from 'msw';

export type User = {
  firstName: string;
  lastName: string;
};

export const handlers = [
  http.get<never, never, User>('https://api.example.com/user', () => {
    return HttpResponse.json({
      firstName: 'Lee',
      lastName: 'Maverick',
    });
  }),
];
