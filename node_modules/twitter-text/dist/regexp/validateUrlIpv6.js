"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// Punting on real IPv6 validation for now
var validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i;
var _default = validateUrlIpv6;
exports["default"] = _default;
module.exports = exports.default;