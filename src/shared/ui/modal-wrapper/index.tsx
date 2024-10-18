import { PropsWithChildren } from 'react';

export function ModalWrapper({ children }: PropsWithChildren) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {children}
      <div className="fixed w-full h-full bg-overlay z-10" />
    </div>
  );
}
