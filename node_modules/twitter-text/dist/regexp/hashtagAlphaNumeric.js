"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _astralLetterAndMarks = _interopRequireDefault(require("./astralLetterAndMarks"));

var _astralNumerals = _interopRequireDefault(require("./astralNumerals"));

var _bmpLetterAndMarks = _interopRequireDefault(require("./bmpLetterAndMarks"));

var _bmpNumerals = _interopRequireDefault(require("./bmpNumerals"));

var _hashtagSpecialChars = _interopRequireDefault(require("./hashtagSpecialChars"));

var _nonBmpCodePairs = _interopRequireDefault(require("./nonBmpCodePairs"));

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var hashtagAlphaNumeric = (0, _regexSupplant["default"])(/(?:[#{bmpLetterAndMarks}#{bmpNumerals}#{hashtagSpecialChars}]|(?=#{nonBmpCodePairs})(?:#{astralLetterAndMarks}|#{astralNumerals}))/, {
  bmpLetterAndMarks: _bmpLetterAndMarks["default"],
  bmpNumerals: _bmpNumerals["default"],
  hashtagSpecialChars: _hashtagSpecialChars["default"],
  nonBmpCodePairs: _nonBmpCodePairs["default"],
  astralLetterAndMarks: _astralLetterAndMarks["default"],
  astralNumerals: _astralNumerals["default"]
});
var _default = hashtagAlphaNumeric;
exports["default"] = _default;
module.exports = exports.default;