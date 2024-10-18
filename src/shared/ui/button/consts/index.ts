export type ButtonType = 'default' | 'primary' | 'secondary' | 'warning';

export const buttonColors: Record<ButtonType, string> = {
  default: 'bg-gray02 text-gray04',
  primary: 'bg-mint03 text-white',
  secondary: 'bg-gray05 text-white',
  warning: 'bg-red03 text-white',
};
