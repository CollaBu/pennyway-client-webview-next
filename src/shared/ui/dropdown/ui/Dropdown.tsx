'use client';
import { PropsWithChildren, useState } from 'react';

export interface IDropdown {
  options: Array<IOption>;
  menuPositionClass: string;
  selectOption: (index: number) => void;
}

export interface IOption {
  title: string;
  itemTitle: string;
}

export function Dropdown({
  options,
  menuPositionClass,
  selectOption,
  children,
}: PropsWithChildren<IDropdown>) {
  const [isOpen, setIsOpen] = useState(false);

  const clickToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const clickOption = (index: number) => {
    setIsOpen(false);
    selectOption(index);
  };

  return (
    <div className="relative w-fit flex">
      <button className="relative" onClick={clickToggle}>
        {children}
      </button>
      {isOpen && (
        <div
          className={`absolute min-w-[118px] p-1 rounded-sm bg-white shadow-[0_0_12px_0_#000000_6%] flex flex-col items-center space-y-0.5 ${menuPositionClass}`}
        >
          {options.map((option, index) => (
            <button
              key={`${option.title}_${option.itemTitle}`}
              onClick={() => clickOption(index)}
              className="w-full p-2 font-medium text-xs text-gray04 bg-transparent hover:text-gray05 hover:bg-gray02 rounded-[3px]"
            >
              {option.itemTitle}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
