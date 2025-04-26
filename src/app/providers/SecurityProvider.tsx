'use client';

import { useEffect } from 'react';
import {
  disableRightClick,
  disableKeyboardShortcuts,
  disableImageDrag,
  clearClipboard,
} from '../security';

export default function SecurityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Disable right click
    document.addEventListener('contextmenu', disableRightClick as any);
    
    // Disable keyboard shortcuts
    document.addEventListener('keydown', disableKeyboardShortcuts as any);
    
    // Disable image drag
    document.addEventListener('dragstart', disableImageDrag as any);
    
    // Clear clipboard periodically
    const clipboardInterval = setInterval(clearClipboard, 1000);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', disableRightClick as any);
      document.removeEventListener('keydown', disableKeyboardShortcuts as any);
      document.removeEventListener('dragstart', disableImageDrag as any);
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