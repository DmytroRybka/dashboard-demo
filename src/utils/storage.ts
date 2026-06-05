import type { EarlyAccessSubmission } from '../types';

const STORAGE_KEY = 'earlyAccessSubmissions';

export function saveSubmission(submission: EarlyAccessSubmission): void {
  const existing = getSubmissions();
  existing.push(submission);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function getSubmissions(): EarlyAccessSubmission[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}
