"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _astralLetterAndMarks = _interopRequireDefault(require("./astralLetterAndMarks"));

var _bmpLetterAndMarks = _interopRequireDefault(require("./bmpLetterAndMarks"));

var _nonBmpCodePairs = _interopRequireDefault(require("./nonBmpCodePairs"));

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// A hashtag must contain at least one unicode letter or mark, as well as numbers, underscores, and select special characters.
var hashtagAlpha = (0, _regexSupplant["default"])(/(?:[#{bmpLetterAndMarks}]|(?=#{nonBmpCodePairs})(?:#{astralLetterAndMarks}))/, {
  bmpLetterAndMarks: _bmpLetterAndMarks["default"],
  nonBmpCodePairs: _nonBmpCodePairs["default"],
  astralLetterAndMarks: _astralLetterAndMarks["default"]
});
var _default = hashtagAlpha;
exports["default"] = _default;
module.exports = exports.default;