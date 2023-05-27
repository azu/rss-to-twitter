// LICENSE : MIT
"use strict";
import * as twttr from "twitter-text";
// DEBUG=TweetTruncator*
import debug0 from "debug";

const debug = debug0("TweetTruncator");
const joinText = (array: string[], separator: string) => {
    const isNotEmpty = (string: string) => {
        return string.length > 0;
    };
    return array.filter(isNotEmpty).join(separator);
};
export type TweetTruncatorOptions = {
    defaultPrefix?: string;
    template?: string;
    truncatedOrder?: string[];
    elisionMark?: string;

    twitterTextOptions?: any;
};
const defaultOptions = {
    defaultPrefix: "",
    template: `%desc% "%title%" %url% %tags%`,
    truncatedOrder: ["tags", "title", "quote", "desc", "url"],
    // text…
    elisionMark: "…"
};

export type TweetTruncatorContents = { desc: string; quote: string; title: string; url: string; tags: string[] };
export default class TweetTruncator {
    private template: string;
    private defaultPrefix: string;
    private readonly truncatedOrder: string[];
    private elisionMark: string;
    private twitterTextOptions: any;

    constructor(options: TweetTruncatorOptions = {}) {
        this.template = options.template || defaultOptions.template;
        this.defaultPrefix = options.defaultPrefix || defaultOptions.defaultPrefix;
        this.truncatedOrder = options.truncatedOrder || defaultOptions.truncatedOrder;
        this.elisionMark = options.elisionMark || defaultOptions.elisionMark;
        this.twitterTextOptions = options.twitterTextOptions || {};
    }

    getTweetLength(str: string) {
        return twttr.getTweetLength(str, this.twitterTextOptions);
    }

    joinContents(contents: TweetTruncatorContents) {
        let template = this.template;
        let { desc, quote, title, url, tags } = contents;
        let prefix = desc ? "" : this.defaultPrefix;

        return template
            ? this.extractTemplate(prefix, template, contents)
            : joinText([prefix, desc, quote, title, url, ...tags], " ");
    }

    extractTemplate(prefix: string, template: string, contents: TweetTruncatorContents) {
        // @ts-expect-error: TODO: fix me
        contents.usage = {};

        let fixedTemplate = template
            .replace(/%(desc|quote|title|url|tags|br)%/g, (match, name) => {
                if (name === "br") {
                    return "\n";
                }
                // @ts-expect-error: TODO: fix me
                contents.usage[name] = true;
                // @ts-expect-error: TODO: fix me
                return contents[name].length ? match : "";
            })
            .trim()
            .replace(/^ +| +$/gm, "")
            .replace(/ +/g, " ");

        return joinText(
            [prefix, ...fixedTemplate.split(" ")].map((content) =>
                content.replace(/%(desc|quote|title|url|tags)%/g, (match, name) => {
                    // @ts-expect-error: TODO: fix me
                    return name === "tags" ? contents.tags.join(" ") : contents[name];
                })
            ),
            " "
        );
    }

    truncateStatus(contents: TweetTruncatorContents, overLength = 0) {
        let over = overLength;

        let copiedContents = { ...contents };
        const elisionMark = this.elisionMark;
        const getTweetLength = this.getTweetLength.bind(this);
        const truncateContent = this.truncateContent.bind(this);
        let truncators = {
            tags: (array: string[]) => {
                let arr = array.slice();

                copiedContents.tags = arr
                    .reverse()
                    .filter((tag) => {
                        if (over <= 0) {
                            return true;
                        }

                        over -= tag.length;
                    })
                    .reverse();
                debug(`tags: ${arr.length} -> ${copiedContents.tags.length}`);
                if (copiedContents.tags.length || over <= 0) {
                    return true;
                }
            },
            title: (string: string) => {
                let str = truncateContent(string, over + elisionMark.length);
                debug(`[TITLE] over: ${over}
${string}
                ->
${str.length ? str : "[DELETE]"}`);
                if (str) {
                    copiedContents.title = str + elisionMark;
                } else {
                    over -= getTweetLength(string) + 1;
                    copiedContents.title = str;
                    if (over > 0) {
                        return false;
                    }
                }

                return true;
            },
            quote: (string: string) => {
                let str = truncateContent(string.slice(1, -1), over + elisionMark.length);
                debug(`[Quote] over: ${over}
${string}
                ->
${str.length ? str : "[DELETE]"}`);
                if (str) {
                    copiedContents.quote = `${str}${elisionMark}`;
                } else {
                    over -= getTweetLength(string) + 1;
                    copiedContents.quote = str;

                    if (over > 0) {
                        return false;
                    }
                }

                return true;
            },
            desc: (string: string) => {
                var str = truncateContent(string, over + elisionMark.length) + elisionMark;
                copiedContents.desc = str;
                debug(`[DESC] over: ${over}
${string}
                ->
${str.length ? str : "[DELETE]"}`);
                return true;
            },
            url: (string: string) => {
                // no change
                return true;
            }
        };
        for (var i = 0; i < this.truncatedOrder.length - 1; i++) {
            if (over <= 0) {
                break;
            }
            const truncatorName = this.truncatedOrder[i];
            // @ts-expect-error: TODO: fix me
            if (copiedContents.usage && !copiedContents.usage[truncatorName]) {
                // @ts-expect-error: TODO: fix me
                copiedContents[truncatorName] = truncatorName === "tags" ? [] : "";
            }
            // @ts-expect-error: TODO: fix me
            const content = copiedContents[truncatorName];
            // @ts-expect-error: TODO: fix me
            const truncate = truncators[truncatorName];
            if (content.length && truncate(content)) {
                break;
            }
        }

        return this.joinContents(copiedContents);
    }

    truncateContent(content: string, overLength: number) {
        // for surrogate pair
        let strArr = [...content];
        let urls = twttr.extractUrlsWithIndices(content).reverse();
        let twLen = this.getTweetLength(content);
        let over = overLength;

        if (!urls.length || twLen <= over + 1) {
            return strArr.slice(0, -(over + 1)).join("");
        }

        for (var i = 0; i < urls.length; i++) {
            const indices = urls[i].indices;
            const start = indices[0];
            const end = indices[1];
            let len = strArr.length;

            if (over < len - end) {
                break;
            }
            strArr = strArr.slice(0, start - (len === end ? end : len));
            over -= twLen - this.getTweetLength(strArr.join(""));
            if (over < 0) {
                break;
            }

            twLen = this.getTweetLength(strArr.join(""));
        }

        if (over >= 0) {
            strArr = strArr.slice(0, -(over + 1));
        }

        return strArr.join("");
    }
}
