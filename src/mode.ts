import { env } from 'node:process';
import type { WebBuddyStrictFeature } from './types.js';

export function isWebBuddyStrictFor(...feature: WebBuddyStrictFeature[]): boolean {
    const raw = env.WEB_BUDDY_STRICT ?? '0';

    if (!raw || raw === '0' || raw === 'false') return false;
    if (raw === '1' || raw === 'true') return true;
    if (!feature.length) return false;

    for (const item of raw.split(',')) {
        if (feature.includes(item)) return true;
    }

    return false;
}
