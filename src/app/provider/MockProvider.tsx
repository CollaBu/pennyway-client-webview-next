'use client';

import { useEffect, useRef, useState } from 'react';

export const MockProvider = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(false);
  const isWorkerStarted = useRef(false);

  useEffect(() => {
    async function enableApiMocking() {
      if (typeof window !== 'undefined' && !isWorkerStarted.current) {
        isWorkerStarted.current = true;
        const { worker } = await import('../mocks/browser');
        await worker.start();
        console.log('Worker started');
        setMswReady(true);
      }
    }

    enableApiMocking();
  }, []);

  if (!mswReady) {
    return null;
  }

  /**
   * 테스트용 코드(추후 제거 예정)
   */

  const fetchUser = async () => {
    try {
      const response = await fetch('https://example.com/user');
      const data = await response.json();
      console.log('응답 데이터:', data);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  fetchUser();

  return <>{children}</>;
};
