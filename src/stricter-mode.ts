import { env } from 'node:process';

export const WebBuddyStricterMode = (env.WEB_BUDDY_LINT_STRICTER ?? '1') === '1';
