import { Button } from '@/shared/ui';

import { modalContents } from '../consts';

interface ModalProps {
  type: keyof typeof modalContents;
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function Modal({ type, isVisible, onCancel, onConfirm }: ModalProps) {
  if (!isVisible) return <></>;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white rounded-[10px] z-20">
        <div className="pt-7 pb-3 px-3.5 w-[230px]">
          <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="text-h3s text-black">{modalContents[type].title}</h3>
            <p className="text-b1m text-gray04">{modalContents[type].description}</p>
          </div>

          <div className="flex justify-between mt-6 flex-1">
            <Button type="default" label="취소" onClick={onCancel} />
            <Button type="primary" label={modalContents[type].confirmText} onClick={onConfirm} />
          </div>
        </div>
      </div>
    </div>
  );
}
