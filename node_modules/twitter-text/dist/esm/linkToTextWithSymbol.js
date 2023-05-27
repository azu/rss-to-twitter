import "core-js/modules/es6.regexp.match";
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import atSigns from './regexp/atSigns';
import htmlEscape from './htmlEscape';
import linkToText from './linkToText';
export default function (entity, symbol, text, attributes, options) {
  var taggedSymbol = options.symbolTag ? "<".concat(options.symbolTag, ">").concat(symbol, "</").concat(options.symbolTag, ">") : symbol;
  text = htmlEscape(text);
  var taggedText = options.textWithSymbolTag ? "<".concat(options.textWithSymbolTag, ">").concat(text, "</").concat(options.textWithSymbolTag, ">") : text;

  if (options.usernameIncludeSymbol || !symbol.match(atSigns)) {
    return linkToText(entity, taggedSymbol + taggedText, attributes, options);
  } else {
    return taggedSymbol + linkToText(entity, taggedText, attributes, options);
  }
}