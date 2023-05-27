import type { Context } from '@actions/github/lib/context';
import type { components } from '@octokit/openapi-types';
import type { Octokit } from '@technote-space/github-action-helper/dist/types';
type IssuesListForRepoResponseData = components['schemas']['issue'];
export declare const getIssues: (octokit: Octokit, context: Context) => Promise<Array<IssuesListForRepoResponseData>>;
export {};
