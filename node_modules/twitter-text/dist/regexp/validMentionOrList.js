"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _atSigns = _interopRequireDefault(require("./atSigns"));

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validMentionPrecedingChars = _interopRequireDefault(require("./validMentionPrecedingChars"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validMentionOrList = (0, _regexSupplant["default"])('(#{validMentionPrecedingChars})' + // $1: Preceding character
'(#{atSigns})' + // $2: At mark
'([a-zA-Z0-9_]{1,20})' + // $3: Screen name
'(/[a-zA-Z][a-zA-Z0-9_-]{0,24})?', // $4: List (optional)
{
  validMentionPrecedingChars: _validMentionPrecedingChars["default"],
  atSigns: _atSigns["default"]
}, 'g');
var _default = validMentionOrList;
exports["default"] = _default;
module.exports = exports.default;