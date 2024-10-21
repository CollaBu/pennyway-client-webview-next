'use client';

import { Suspense, use } from 'react';

const mockingEnabledPromise =
  typeof window !== 'undefined'
    ? import('../mocks/browser').then(async ({ worker }) => {
        await worker.start({
          onUnhandledRequest(request, print) {
            if (request.url.includes('_next')) {
              return;
            }
            print.warning();
          },
        });
      })
    : Promise.resolve();

export function MockProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // If MSW is enabled, we need to wait for the worker to start,
  // so we wrap the children in a Suspense boundary until it's ready.
  return (
    <Suspense fallback={null}>
      <MockProviderWrapper>{children}</MockProviderWrapper>
    </Suspense>
  );
}

function MockProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  use(mockingEnabledPromise);
  return children;
}
