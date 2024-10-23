import { PropsWithChildren } from 'react';

import { Header } from '@/shared/ui';
import type { IHeader } from '@/shared/ui';

export interface IPageContainer {
  headerProps: IHeader;
  hasHeader?: boolean;
}
export function PageContainer({
  headerProps,
  hasHeader = true,
  children,
}: PropsWithChildren<IPageContainer>) {
  return (
    <div>
      {hasHeader && <Header {...headerProps} />}
      <div className={`${hasHeader ? 'mt-[44px]' : ''}`}>{children}</div>
    </div>
  );
}
