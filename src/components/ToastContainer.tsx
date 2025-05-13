// src/components/ToastContainer.tsx
import React, { useEffect, useState } from 'react';
import { Toast as ToastType, toastManager } from './ToastManager';
import { Toast } from './Toast';

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  useEffect(() => {
    const listener = (updatedToasts: ToastType[]) => {
      setToasts(updatedToasts);
    };

    toastManager.subscribe(listener);
    return () => toastManager.unsubscribe(listener);
  }, []);

  return (
    <div className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          variant={toast.type}
          onClose={() => toastManager.removeToast(toast.id)}
        />
      ))}
    </div>
  );
}
