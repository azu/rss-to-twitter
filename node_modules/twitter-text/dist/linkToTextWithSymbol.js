"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es6.regexp.match");

var _atSigns = _interopRequireDefault(require("./regexp/atSigns"));

var _htmlEscape = _interopRequireDefault(require("./htmlEscape"));

var _linkToText = _interopRequireDefault(require("./linkToText"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(entity, symbol, text, attributes, options) {
  var taggedSymbol = options.symbolTag ? "<".concat(options.symbolTag, ">").concat(symbol, "</").concat(options.symbolTag, ">") : symbol;
  text = (0, _htmlEscape["default"])(text);
  var taggedText = options.textWithSymbolTag ? "<".concat(options.textWithSymbolTag, ">").concat(text, "</").concat(options.textWithSymbolTag, ">") : text;

  if (options.usernameIncludeSymbol || !symbol.match(_atSigns["default"])) {
    return (0, _linkToText["default"])(entity, taggedSymbol + taggedText, attributes, options);
  } else {
    return taggedSymbol + (0, _linkToText["default"])(entity, taggedText, attributes, options);
  }
}

module.exports = exports.default;