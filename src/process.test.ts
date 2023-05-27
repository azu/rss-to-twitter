/* eslint-disable no-magic-numbers */
import { Logger } from '@technote-space/github-action-log-helper';
import { describe, it } from 'vitest';
import { execute } from './process';

describe('execute', () => {
  // disableNetConnect(nock);
  // testEnv(rootDir);
  // testChildProcess();

  it.skip('should execute', async() => {
    // const mockStdout = spyOnStdout();
    process.env.INPUT_RSS_URL = 'https://jser.info/rss/';
    // This cron means every day at 00:00
    process.env.INPUT_SCHEDULE = '0 0 * * *';
    process.env.INPUT_TWEET_TEMPLATE = '"%title%" %url%\n%desc%';
    // require env
    // process.env.INPUT_TWITTER_APIKEY = 'x';
    // process.env.INPUT_TWITTER_APIKEY_SECRET = 'x';
    // process.env.INPUT_TWITTER_ACCESS_TOKEN = 'x-7U/x';
    // process.env.INPUT_TWITTER_ACCESS_TOKEN_SECRET = 'x';
    await execute(new Logger());
  });
});
