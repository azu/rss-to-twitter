import type { Logger } from '@technote-space/github-action-log-helper';
import { Context } from '@actions/github/lib/context';
export declare const execute: (logger: Logger, context: Context) => Promise<void>;
