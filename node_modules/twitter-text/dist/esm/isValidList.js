import "core-js/modules/es6.regexp.match";
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import regexSupplant from './lib/regexSupplant';
import validMentionOrList from './regexp/validMentionOrList';
var VALID_LIST_RE = regexSupplant(/^#{validMentionOrList}$/, {
  validMentionOrList: validMentionOrList
});
export default function (usernameList) {
  var match = usernameList.match(VALID_LIST_RE); // Must have matched and had nothing before or after

  return !!(match && match[1] == '' && match[4]);
}