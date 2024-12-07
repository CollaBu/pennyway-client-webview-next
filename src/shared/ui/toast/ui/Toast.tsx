'use client';

import { ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css';

export const Toast = ({ ...props }: ToastContainerProps) => {
  return (
    <ToastContainer
      position="bottom-center"
      closeButton={false}
      hideProgressBar={true}
      closeOnClick={true}
      autoClose={3000}
      limit={1}
      theme="light"
      className="b1s"
      {...props}
    />
  );
};
