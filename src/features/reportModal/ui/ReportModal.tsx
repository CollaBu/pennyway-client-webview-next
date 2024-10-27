'use client';
import { useState } from 'react';

import { Button, ModalWrapper, Checkbox, Radio } from '@/shared/ui';

import { reportCategories } from '../consts';

export interface IReportModal {
  isVisible: boolean;
  feedId: number;
  onCancel: () => void;
  onReport: () => void;
}
export const ReportModal = ({ isVisible, feedId, onCancel, onReport }: IReportModal) => {
  const contentMaxLength = 80;
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [reportContent, setReportContent] = useState('');
  const [isBlindFeed, setIsBlindFeed] = useState(false);

  const changeReportContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setReportContent(e.target.value);

  const sendReport = async () => {
    try {
      const response = await fetch(`http://api.example.com/v2/feeds/${feedId}/reports`, {
        method: 'POST',
        body: JSON.stringify({
          isBlind: isBlindFeed,
          content: reportContent,
          category: selectedCategory,
        }),
      });
      const result = await response.json();

      if (result.code === '2000' && result.data.isReported) onReport();
      else throw Error;
    } catch {
      alert('신고에 실패했습니다. 다시 확인해주세요.');
    }
  };

  if (!isVisible) return <></>;

  return (
    <ModalWrapper position="center">
      <div className="bg-white rounded-lg z-20 w-full mx-5">
        <div className="p-[18px] w-full flex flex-col items-start justify-center">
          <h3 className="text-h3s text-gray07">신고하기</h3>
          <div className="w-full flex flex-wrap -mb-[10px] mt-4">
            {reportCategories.map((category) => (
              <div className="w-[122px] flex items-center mb-[10px]" key={category}>
                <Radio
                  isSelected={selectedCategory === category}
                  changeSelected={() => setSelectedCategory(category)}
                  name="reportCategory"
                  shape="circleGraySmall"
                  text={<span className="ml-1 text-b1m text-gray05">{category}</span>}
                />
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col space-y-1 items-end mt-4">
            <textarea
              value={reportContent}
              className="resize-none w-full min-h-[68px] p-[10px] rounded-[4px] bg-gray01 text-b1m text-gray07 outline-none focus:outline-none"
              onChange={changeReportContent}
              maxLength={contentMaxLength}
            ></textarea>
            <span className="text-b2m text-gray03">
              {reportContent.length}/{contentMaxLength}
            </span>
          </div>
          <Checkbox
            shape="boxPrimary"
            isChecked={isBlindFeed}
            setIsChecked={setIsBlindFeed}
            text={<span className="ml-1 text-gray05 text-b1m">해당 게시물 숨기기</span>}
          />
          <div className="w-full flex justify-between space-x-2 mt-5 flex-1 [&>button]:rounded-[4px] [&>button]:w-full">
            <Button variant="medium" label="취소" onClick={onCancel} />
            <Button
              type={reportContent && selectedCategory ? 'warning' : 'disabled'}
              variant="medium"
              label="신고하기"
              onClick={sendReport}
            />
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};
