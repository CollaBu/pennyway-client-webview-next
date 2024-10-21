import { buttonColors, buttonSizes } from '../consts';

interface IButtonProps {
  type?: keyof typeof buttonColors;
  variant: keyof typeof buttonSizes;
  label: string;
  onClick: () => void;
}

export function Button({ type = 'default', variant = 'medium', label, onClick }: IButtonProps) {
  return (
    <button className={`${buttonSizes[variant]} ${buttonColors[type]}`} onClick={onClick}>
      {label}
    </button>
  );
}
