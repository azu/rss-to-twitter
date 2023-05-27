import { resolve } from 'path';
import { setFailed } from '@actions/core';
import { Context } from '@actions/github/lib/context';
import { ContextHelper } from '@technote-space/github-action-helper';
import { Logger } from '@technote-space/github-action-log-helper';
import { execute } from './process';

(async(): Promise<void> => {
  const logger  = new Logger();
  const context = new Context();
  ContextHelper.showActionInfo(resolve(__dirname, '..'), logger, context);
  await execute(logger, context);
})().catch(error => {
  console.log(error);
  setFailed(error.message);
});
