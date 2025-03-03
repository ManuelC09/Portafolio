declare global {
    interface Window {
      turnstile?: {
        render: (
          element: HTMLElement,
          options: {
            sitekey: string;
            callback?: (token: string) => void;
            "error-callback"?: () => void;
            "expired-callback"?: () => void;
          }
        ) => string | null;
        reset: (widgetId?: string | null) => void;
        remove: (widgetId?: string | null) => void;
      };
    }
  }
  
  export {};
  