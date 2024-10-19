import { PropsWithChildren } from 'react';

interface IModalWrapperProps extends PropsWithChildren {
  position?: 'center' | 'bottom';
}

export function ModalWrapper({ position = 'center', children }: IModalWrapperProps) {
  const alignmentClass = position === 'center' ? 'items-center' : 'items-end';

  return (
    <div className={`fixed inset-0 flex ${alignmentClass} justify-center`}>
      {children}
      <div className="fixed w-full h-full bg-overlay z-10" />
    </div>
  );
}
