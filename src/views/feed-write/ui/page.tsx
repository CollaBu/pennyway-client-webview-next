'use client';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Dropdown, PageContainer } from '@/shared/ui';

import IconArrowFront from '/public/assets/icon/arrow-front.svg';
import ArrowDownSmall from '/public/assets/icon/arrow-down-small.svg';

import { feedScopeOptions } from '../consts';

export default function FeedWritePage() {
  const router = useRouter();
  const [feedScope, setFeedScope] = useState(0);
  const selectFeedScope = (index: number) => setFeedScope(index);

  const goBack = () => router.back();
  const registFeed = async () => {
    // 피드 등록 또는 수정 로직
  };

  const feedWriteHeaderProps = {
    left: (
      <button className="w-11 h-11 flex items-center justify-center ml-[3px]" onClick={goBack}>
        <IconArrowFront />
      </button>
    ),
    center: (
      <Dropdown
        selectOption={selectFeedScope}
        options={feedScopeOptions}
        menuPositionClass="top-[40px] left-1/2 -translate-x-1/2"
      >
        <span className="text-gray07 font-medium text-sm">{feedScopeOptions[feedScope].title}</span>
        <div className="absolute -right-6 top-1/2 -translate-y-1/2">
          <ArrowDownSmall width="24" height="24" />
        </div>
      </Dropdown>
    ),
    right: (
      <button className="mr-5 text-mint03 font-medium text-sm" onClick={registFeed}>
        게시
      </button>
    ),
  };

  return (
    <PageContainer hasHeader={true} headerProps={feedWriteHeaderProps}>
      <div>12345</div>
    </PageContainer>
  );
}
