"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _spacesGroup = _interopRequireDefault(require("./spacesGroup"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var _default = (0, _regexSupplant["default"])(/[#{spacesGroup}]/, {
  spacesGroup: _spacesGroup["default"]
});

exports["default"] = _default;
module.exports = exports.default;