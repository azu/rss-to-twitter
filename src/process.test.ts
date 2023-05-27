/* eslint-disable no-magic-numbers */
import { resolve } from 'path';
import { Logger } from '@technote-space/github-action-log-helper';
import {
  testEnv,
  spyOnStdout,
  spyOnSpawn,
  testChildProcess,
  getOctokit,
  generateContext,
  execCalledWith,
  stdoutCalledWith,
  getLogStdout,
  disableNetConnect,
  getApiFixture,
} from '@technote-space/github-action-test-helper';
import nock from 'nock';
import { describe, it } from 'vitest';
import { execute } from './process';

const rootDir     = resolve(__dirname, '..');
const fixturesDir = resolve(__dirname, 'fixtures');

describe('execute', () => {
  disableNetConnect(nock);
  testEnv(rootDir);
  testChildProcess();

  it('should execute', async() => {
    const mockExec   = spyOnSpawn();
    const mockStdout = spyOnStdout();
    nock('https://api.github.com')
      .get('/repos/hello/world/issues')
      .reply(200, () => getApiFixture(fixturesDir, 'issues.get'));

    await execute(new Logger(), getOctokit(), generateContext({ owner: 'hello', repo: 'world' }));

    execCalledWith(mockExec, ['ls -lat']);
    stdoutCalledWith(mockStdout, [
      '::group::Dump context',
      getLogStdout({ action: '' }),
      '::endgroup::',
      '::group::Command test',
      '[command]ls -lat',
      '  >> stdout',
      '::endgroup::',
      '::group::Color text',
      '> green text: \x1b[31;40;1mgreen\x1b[0m',
      '::warning::warning!',
      '::error::error!!!',
      '::debug::debug...',
      'log log log',
      '::endgroup::',
      '::group::Get issues',
      getLogStdout([
        'Test issue1',
        'Test issue2',
      ]),
      '::endgroup::',
    ]);
  });
});
