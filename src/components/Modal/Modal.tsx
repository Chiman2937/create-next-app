// src/components/Modal/Modal.tsx
'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className='font-primary fixed inset-0 z-50 flex items-center justify-center'
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className='absolute inset-0 bg-black/50' />

      {/* Modal Content */}
      <div
        className='relative z-10 mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-xl'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
          onClick={onClose}
        >
          ✕
        </button>

        <div className='font-primary'>{children}</div>
      </div>
    </div>,
    document.body,
  );
};
