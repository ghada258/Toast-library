export type ToastType = 'default' | 'success' | 'error';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

type Listener = (toasts: Toast[]) => void;

class ToastManager {
  private toasts: Toast[] = [];
  private listeners: Listener[] = [];

  addToast(message: string, type: ToastType) {
    const newToast: Toast = {
      id: Date.now(),
      message,
      type,
    };
    this.toasts.push(newToast);
    this.notify();
  }

  removeToast(id: number) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    this.notify();
  }

  /** ✅ Add this method to remove all toasts at once */
  clearToasts() {
    this.toasts = [];
    this.notify();
  }

  subscribe(listener: Listener) {
    this.listeners.push(listener);
  }

  unsubscribe(listener: Listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  private notify() {
    this.listeners.forEach((listener) => listener([...this.toasts]));
  }
}

export const toastManager = new ToastManager();
