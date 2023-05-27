"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es6.regexp.match");

var _regexSupplant = _interopRequireDefault(require("./lib/regexSupplant"));

var _validMentionOrList = _interopRequireDefault(require("./regexp/validMentionOrList"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var VALID_LIST_RE = (0, _regexSupplant["default"])(/^#{validMentionOrList}$/, {
  validMentionOrList: _validMentionOrList["default"]
});

function _default(usernameList) {
  var match = usernameList.match(VALID_LIST_RE); // Must have matched and had nothing before or after

  return !!(match && match[1] == '' && match[4]);
}

module.exports = exports.default;