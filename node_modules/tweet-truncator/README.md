# tweet-truncator [![Actions Status: test](https://github.com/azu/tweet-truncator/workflows/test/badge.svg)](https://github.com/azu/tweet-truncator/actions?query=workflow%3A"test")

Truncate contents to 280 chars for tweeting.

- [twitter-text-js](https://github.com/twitter/twitter-text/tree/master/js)

## Installation

    npm install tweet-truncator

## Usage

### truncate(content, [options])

```js
import { truncate } from "tweet-truncator";
const contents = {
    title: "tweet-truncator",
    url: "https://github.com/azu/tweet-truncator",
    desc: "Truncate contents to 140 chars.",
    quote: "quote",
    tags: ["#twitter", "JavaScript"]
};
const options = {
    defaultPrefix: "See:",
    template: '%desc% "%title%" %url% %tags%',
    // maxLength: 280
};
const result = truncate(contents, options);
console.log(result);
/*
Truncate contents to 140 chars. "tweet-truncator" https://github.com/azu/tweet-truncator #twitter #JavaScript
*/
```

See [example/](example/)

#### [TweetTruncator](src/tweet-truncator.js)

TweetTruncator is a core class of tweet-truncator.

```js
const truncator = new TweetTruncator({
    defaultPrefix: "See:",
    template: `%desc% "%title%" %url% %tags%`
});
const contents = {
    title: "TITLE",
    url: "https://github.com/twitter/twitter-text",
    desc: "",
    quote: "quote",
    tags: []
};
const overLength = 10;// it means that remove 10 chars from contents.
var result = truncator.truncateStatus(contents, overLength);
```

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

Thanks to [Tombfix](https://github.com/tombfix/core "Tombfix").
