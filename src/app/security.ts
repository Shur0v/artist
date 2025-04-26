// Security utilities for preventing content copying and inspection

// Disable right click
export function disableRightClick(e: MouseEvent) {
  e.preventDefault();
  return false;
}

// Disable keyboard shortcuts
export function disableKeyboardShortcuts(e: KeyboardEvent) {
  // Prevent Ctrl+C, Ctrl+S, Ctrl+U, Ctrl+P, F12
  if (
    (e.ctrlKey && (e.key === 'c' || e.key === 's' || e.key === 'u' || e.key === 'p')) ||
    e.key === 'F12'
  ) {
    e.preventDefault();
    return false;
  }
}

// Disable text selection
export function disableTextSelection() {
  return {
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  } as const;
}

// Disable image dragging
export function disableImageDrag(e: DragEvent) {
  e.preventDefault();
  return false;
}

// Clear clipboard data
export function clearClipboard() {
  try {
    if (document.hasFocus() && navigator.clipboard) {
      navigator.clipboard.writeText('').catch(() => {
        // Silently fail if clipboard access is denied
      });
    }
  } catch {
    // Ignore any clipboard-related errors
  }
} 