import { toast } from 'react-toastify';

import { toastMessage } from '../consts';

export const toastHandler = (message: keyof typeof toastMessage) => {
  toast(toastMessage[message]);
};
