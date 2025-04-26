'use client';

import { useEffect } from 'react';
import {
  disableRightClick,
  disableKeyboardShortcuts,
  disableImageDrag,
  clearClipboard,
} from '../security';

interface SecurityProviderProps {
  children: React.ReactNode;
}

export default function SecurityProvider({ children }: SecurityProviderProps) {
  useEffect(() => {
    // Disable right click
    const handleRightClick = (e: MouseEvent) => {
      disableRightClick(e);
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      disableKeyboardShortcuts(e);
    };

    // Disable image drag
    const handleDragStart = (e: DragEvent) => {
      disableImageDrag(e);
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    
    // Clear clipboard periodically
    const clipboardInterval = setInterval(clearClipboard, 1000);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      clearInterval(clipboardInterval);
    };
  }, []);

  return (
    <div
      style={{
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      }}
    >
      {children}
    </div>
  );
} 