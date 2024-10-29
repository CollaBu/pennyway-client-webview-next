import { blindFeedMockData, feedMockData } from '@/app/mocks/data';
import { ReportModal } from '@/features/feed/reportModal';

import IconArrowFront from '/public/assets/icon/arrow-front.svg';

import { PageContainer } from '@/widgets/pageContainer/ui/PageContainer';

import { useState } from 'react';

export default function Home() {
  const [feeds, setFeeds] = useState([...feedMockData]);
  return (
    <PageContainer
      headerProps={{
        left: <IconArrowFront width="44" height="44" />,
        center: <div className="text-black">메인페이지</div>,
        right: <button className="w-[44px] h-[44px] pr-2 text-black">게시</button>,
      }}
    >
      <ReportModal
        isVisible={true}
        feedId={12}
        onCancel={() => {}}
        onReport={() => {
          //실제로는 다시, 피드 조회를 재호출 할 것이나, DB가 없기에 피드조회 대신 blindFeedMockData를 통해 가려진 새 배열을 가져온다
          setFeeds([...blindFeedMockData(feeds, 12)]);
        }}
      />
      <div className="mt-[44px] flex flex-col justify-center gap-12 bg-[#666666]">
        <div className="w-72">
          <p className="bg-white text-black">White</p>
          <p className="bg-gray01 text-black">Gray 01</p>
          <p className="bg-gray02 text-black">Gray 02</p>
          <p className="bg-gray03 text-black">Gray 03</p>
          <p className="bg-gray04 text-black">Gray 04</p>
          <p className="bg-gray05 text-black">Gray 05</p>
          <p className="bg-gray06 text-black">Gray 06</p>
          <p className="bg-gray07 text-white">Gray 07</p>
        </div>

        <div className="w-72">
          <p className="bg-red01 text-black">Red 01</p>
          <p className="bg-red02 text-black">Red 02</p>
          <p className="bg-red03 text-black">Red 03</p>

          <div className="h-6" />

          <p className="bg-yellow01 text-black">Yellow 01</p>
          <p className="bg-yellow02 text-black">Yellow 02</p>
        </div>

        <div className="w-72">
          <p className="bg-ashblue01 text-black">Ashblue 01</p>
          <p className="bg-ashblue02 text-black">Ashblue 02</p>
          <p className="bg-overlay text-white">Overlay</p>

          <div className="h-6" />

          <p className="bg-mint01 text-black">Mint 01</p>
          <p className="bg-mint02 text-black">Mint 02</p>
          <p className="bg-mint03 text-black">Mint 03</p>
        </div>
      </div>
    </PageContainer>
  );
}
