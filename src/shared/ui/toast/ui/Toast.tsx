'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css';

export const Toast = () => {
  return (
    <ToastContainer
      position="bottom-center"
      closeButton={false}
      hideProgressBar={true}
      closeOnClick={true}
      autoClose={300000}
      limit={1}
      theme="light"
      className="b1s"
    />
  );
};
