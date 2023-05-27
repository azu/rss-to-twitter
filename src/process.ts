import type { Context } from '@actions/github/lib/context';
import type { Octokit } from '@technote-space/github-action-helper/dist/types';
import type { Logger } from '@technote-space/github-action-log-helper';
import * as core from '@actions/core';
import cronParser from 'cron-parser';
import Parser from 'rss-parser';
import { truncate } from 'tweet-truncator';
import { TwitterApi } from 'twitter-api-v2';

async function fetchRSSFeed(rssUrl: string) {
  const parser = new Parser();
  return parser.parseURL(rssUrl);
}

async function getPrevExecuteTime(cronSyntax: string, currentDate: Date) {
  const result = cronParser.parseExpression(cronSyntax, {
    currentDate: currentDate,
  });
  return result.prev();
}

async function postToTwitter(statusText: string, twitterConfig: {
  APIKEY: string;
  APIKEY_SECRET: string;
  ACCESS_TOKEN: string;
  ACCESS_TOKEN_SECRET: string;
}) {
  const twitterClient = new TwitterApi({
    appKey: twitterConfig.APIKEY,
    appSecret: twitterConfig.APIKEY_SECRET,
    accessToken: twitterConfig.ACCESS_TOKEN,
    accessSecret: twitterConfig.ACCESS_TOKEN_SECRET,
  });
  return twitterClient.v2.tweet(statusText);
}

export const execute = async(logger: Logger, _octokit: Octokit, _context: Context): Promise<void> => {
  const rssUrl = core.getInput('RSS_URL', {
    required: true,
    trimWhitespace: true
  });
  logger.startProcess('fetch rss feed: ' + rssUrl);
  const rssFeed = await fetchRSSFeed(rssUrl);
  logger.info('title: %s, items: %d', rssFeed.title, rssFeed.items.length);
  const scheduleCron = core.getInput('SCHEDULE', {
    required: true,
    trimWhitespace: true
  });
  if (!scheduleCron) {
    throw new Error('schedule should be copied cron expression like "0 0 * * *" on your schedule.');
  }
  const diffMinutes = 5; // cover 5 minutes delay
  const currentDate = new Date();
  const adjustedDate = new Date(currentDate.getTime() - diffMinutes * 60 * 1000);
  const prevExecutionTime = await getPrevExecuteTime(scheduleCron, adjustedDate);
  logger.startProcess(`filter updated items by schedule: ${scheduleCron}`);
  logger.info(`current time: ${currentDate.toISOString()}, prev execute time: ${prevExecutionTime.toDate().toISOString()}`);

  const updatedItems = rssFeed.items.filter((item) => {
    if (!item.pubDate) {
      return false;// skip if no publish date
    }
    const pubDate = new Date(item.pubDate);
    return pubDate.getTime() >= prevExecutionTime.getTime();
  });
  logger.info('updated items: %d', updatedItems.length);
  if (updatedItems.length === 0) {
    return logger.endProcess();
  }
  logger.startProcess('Tweet updated %d items', updatedItems.length);
  const ACCESS_TOKEN_SECRET = core.getInput('ACCESS_TOKEN_SECRET', {
    required: true,
  });
  const ACCESS_TOKEN = core.getInput('ACCESS_TOKEN', {
    required: true,
  });
  const APIKEY = core.getInput('APIKEY', {
    required: true,
  });
  const APIKEY_SECRET = core.getInput('APIKEY_SECRET', {
    required: true,
  });

  const statusTemplate = core.getInput('STATUS_TEMPLATE') || '"%title%" %url%';
  const reverseUpdatedItems = updatedItems.reverse();
  for (const updatedItem of reverseUpdatedItems) {
    const statusText = truncate({
      title: updatedItem.title,
      url: updatedItem.link,
      // force to slice 140 characters
      desc: updatedItem.contentSnippet?.slice(0, 140),
      tags: [],
      quote: ''
    }, {
      // `"%title%" %url% %desc%`
      template: statusTemplate
    });
    try {
      await postToTwitter(statusText, {
        APIKEY,
        APIKEY_SECRET,
        ACCESS_TOKEN,
        ACCESS_TOKEN_SECRET,
      });
    } catch (error: any) {
      logger.debug(JSON.stringify(error));
      logger.error(error.message);
    }
  }
  logger.endProcess();
};
