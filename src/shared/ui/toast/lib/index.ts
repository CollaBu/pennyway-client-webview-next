import { toast } from 'react-toastify';

import { toastIcon, toastMessage } from '../consts';

export const toastHandler = (message: keyof typeof toastMessage, icon: keyof typeof toastIcon) => {
  toast(toastMessage[message], { icon: toastIcon[icon] });
};
