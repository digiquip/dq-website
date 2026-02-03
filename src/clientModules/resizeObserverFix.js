// Suppress benign ResizeObserver error in development
// See: https://github.com/WICG/resize-observer/issues/38
if (typeof window !== 'undefined') {
  const resizeObserverErr = window.onerror;
  window.onerror = (message, ...args) => {
    if (typeof message === 'string' && message.includes('ResizeObserver loop')) {
      return true;
    }
    if (resizeObserverErr) {
      return resizeObserverErr(message, ...args);
    }
  };
}
