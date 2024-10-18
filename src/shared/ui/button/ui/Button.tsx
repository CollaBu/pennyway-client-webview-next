import { ButtonType, buttonColors } from '../consts';

interface ButtonProps {
  type?: ButtonType;
  label: string;
  onClick: () => void;
}

export function Button({ type = 'default', label, onClick }: ButtonProps) {
  return (
    <button
      className={`w-24 rounded-md px-[1.125rem] py-2.5 text-b1m ${buttonColors[type]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
