// LICENSE : MIT
"use strict";
import TweetTruncator from "./tweet-truncator";
// export class
export { TweetTruncator as TweetTruncator };

/**
 * truncate contents object with maxLength.
 * @param {{
 *   desc?: string,
 *   quote?: string,
 *   title?: string,
 *   url?: string,
 *   tags?: string[]
 * }} contents
 * @param {object} options
 * @returns {string}
 */
export function truncate(contents, options = {}) {
    const maxLength = options.maxLength || 280; // default: 280
    const twitterTr = new TweetTruncator(options);
    const fixedContents = {
        desc: "",
        quote: "",
        title: "",
        url: "",
        tags: [],
        ...contents
    };
    fixedContents.tags = fixedContents.tags.map((tag) => `#${tag}`);
    const status = twitterTr.joinContents(fixedContents);
    let over = twitterTr.getTweetLength(status) - maxLength;
    if (over > 0) {
        return twitterTr.truncateStatus(fixedContents, over);
    }
    return status;
}
