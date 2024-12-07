import { toast } from 'react-toastify';

import { toastIcon, TOAST_MESSAGES } from '../consts';

export const toastHandler = (
  message: keyof typeof TOAST_MESSAGES,
  icon: keyof typeof toastIcon,
) => {
  toast(TOAST_MESSAGES[message], { icon: toastIcon[icon] });
};
