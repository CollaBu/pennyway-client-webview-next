import { InputHTMLAttributes } from 'react';

/**
 * Input 컴포넌트의 속성 타입
 * @param value - 입력 값
 * @param onChange - 입력 값 변경 시 호출되는 함수
 * @param placeholder - 입력 창 안내 문구
 */

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input = (props: IInputProps) => {
  return <input {...props} className="w-full h-full focus:outline-none" />;
};
