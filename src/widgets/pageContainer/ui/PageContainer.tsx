import { Header } from '@/shared/ui';
import type { IHeader } from '@/shared/ui/header/ui/Header';

export interface IPageContainer {
  headerProps: IHeader;
  hasHeader?: boolean;
  children?: JSX.Element;
}
export default function PageContainer({ headerProps, hasHeader = true, children }: IPageContainer) {
  return (
    <div>
      {hasHeader && <Header {...headerProps} />}
      <div className={`${hasHeader ? 'mt-[44px]' : ''}`}>{children}</div>
    </div>
  );
}
