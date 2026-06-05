export function trackEvent(eventName: string, payload?: Record<string, unknown>): void {
  if (typeof window !== 'undefined') {
    console.log(`[Analytics] ${eventName}`, payload);
  }
}
