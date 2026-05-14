import { URL } from 'url';

export function sanitizeUrl(raw?: string | null): string | null {
  if (!raw) return null;
  try {
    const url = new URL(raw, 'https://luciferdonghua.in');
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    return url.toString();
  } catch {
    return null;
  }
}
