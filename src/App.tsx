// src/App.tsx
import { Button } from './components/Button';
import { ToastContainer } from './components/ToastContainer';
import { toastManager } from './components/ToastManager';

function App() {
  const addToast = (message: string, variant: 'default' | 'success' | 'error') => {
    toastManager.addToast(message, variant);
  };

  const dismissAll = () => {
    toastManager.clearToasts();
  };

  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button onClick={() => addToast('This is a default toast', 'default')}>Default</Button>
        <Button onClick={() => addToast('This is a success toast ✅', 'success')}>Success ✅</Button>
        <Button onClick={() => addToast('This is an error toast ❌', 'error')}>Error ❌</Button>
        <Button onClick={dismissAll}>Dismiss All 🧹</Button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
