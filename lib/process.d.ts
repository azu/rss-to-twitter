import type { Context } from '@actions/github/lib/context';
import type { Octokit } from '@technote-space/github-action-helper/dist/types';
import type { Logger } from '@technote-space/github-action-log-helper';
export declare const execute: (logger: Logger, _octokit: Octokit, _context: Context) => Promise<void>;
