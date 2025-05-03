'use client';

interface SecurityProviderProps {
  children: React.ReactNode;
}

class SecurityManager {
  private static instance: SecurityManager;
  private initialized: boolean = false;

  private constructor() {
    if (typeof window !== 'undefined') {
      this.initializeSecurity();
    }
  }

  public static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }

  private initializeSecurity(): void {
    if (this.initialized) return;

    // Disable context menu (right click)
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      return false;
    });

    // Disable keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Prevent Ctrl/Cmd + key combinations
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        return false;
      }

      // Prevent F12 and other function keys
      if (e.key.startsWith('F')) {
        e.preventDefault();
        return false;
      }

      // Prevent Alt + key combinations
      if (e.altKey) {
        e.preventDefault();
        return false;
      }
    }, true);

    // Disable text selection
    document.addEventListener('selectstart', (e) => {
      e.preventDefault();
      return false;
    });

    // Disable drag and drop
    document.addEventListener('dragstart', (e) => {
      e.preventDefault();
      return false;
    });

    // Disable copy/paste
    document.addEventListener('copy', (e) => {
      e.preventDefault();
      return false;
    });

    document.addEventListener('paste', (e) => {
      e.preventDefault();
      return false;
    });

    document.addEventListener('cut', (e) => {
      e.preventDefault();
      return false;
    });

    // Clear clipboard periodically
    setInterval(() => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText('');
      }
    }, 1000);

    // Disable developer tools through various methods
    function detectDevTools(): void {
      if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
        document.body.innerHTML = '';
      }
    }

    window.addEventListener('resize', detectDevTools);
    setInterval(detectDevTools, 1000);

    this.initialized = true;
  }
}

export default function SecurityProvider({ children }: SecurityProviderProps) {
  // Initialize security manager
  if (typeof window !== 'undefined') {
    SecurityManager.getInstance();
  }

  return (
    <div style={{
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
      WebkitTouchCallout: 'none',
    }}>
      {children}
    </div>
  );
} 