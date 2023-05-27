import type { Context } from '@actions/github/lib/context';
import type { WebhookPayload } from '@actions/github/lib/interfaces';

export const getPayload = (context: Context): WebhookPayload => context.payload;
