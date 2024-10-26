import { useState } from 'react';

import { Button, ModalWrapper, Checkbox, Radio } from '@/shared/ui';

import { reportCategories } from '../const';

interface IReportModal {
  isVisible: boolean;
  onCancel: () => void;
  onReport: () => void;
}
export const ReportModal = ({ isVisible, onCancel, onReport }: IReportModal) => {
  const contentMaxLength = 80;
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [reportContent, setReportContent] = useState('');
  const [isHidedFeed, setIsHidedFeed] = useState(false);

  const changeReportContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setReportContent(e.target.value);

  const sendReport = () => {
    //server request 시 동작...
    console.log('send Report!', selectedCategory, reportContent, isHidedFeed);

    //server request 이후 동작
    onReport();
    onCancel();
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
              className="w-full p-[10px] rounded-[4px] bg-gray01 text-b1m text-gray07 outline-none focus:outline-none"
              onChange={changeReportContent}
              maxLength={contentMaxLength}
            ></textarea>
            <span className="text-b2m text-gray03">
              {reportContent.length}/{contentMaxLength}
            </span>
          </div>
          <Checkbox
            shape="boxPrimary"
            isChecked={isHidedFeed}
            setIsChecked={setIsHidedFeed}
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
