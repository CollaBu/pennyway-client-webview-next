import type { Metadata } from 'next';

import { MSWProvider } from '@/app/mocks';
import { QueryProvider } from '@/app/query';
import './globals.css';

if (process.env.NEXT_RUNTIME === 'nodejs') {
  import('@/app/mocks').then(({ server }) => {
    server.listen();
  });
}

export const metadata: Metadata = {
  title: 'Pennyway',
  description: '💰 Pennyway : 지출 내역을 관리하고 공유하는 플랫폼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <MSWProvider>
          <QueryProvider>{children}</QueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
