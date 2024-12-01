'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = () => {
  return (
    <ToastContainer
      position="bottom-center"
      closeButton={false}
      hideProgressBar={true}
      closeOnClick={true}
      autoClose={3000}
      limit={1}
      theme="light"
      style={{
        position: 'fixed',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '87.5vw',
        maxWidth: '280px',
        margin: '0 auto',
      }}
      toastStyle={{
        backgroundColor: '#98a3b4e5',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6px',
        width: '100%',
        padding: '0 8px',
      }}
      bodyStyle={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        height: '100%',
      }}
      className="b1s"
    />
  );
};
