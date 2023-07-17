'use client';

import { useEffect } from 'react';

const useEscapeKey = (callback: () => void) => {
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        callback();
      }
    }
    window.addEventListener('keydown', handleEscapeKey);

    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [callback]);
};

export default useEscapeKey;
