declare global {
  interface Window {
    plausible?: (event: string, options?: Record<string, any>) => void;
  }
}
export {};
