// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import invalidCharsGroup from './invalidCharsGroup';
import regexSupplant from '../lib/regexSupplant';
var invalidChars = regexSupplant(/[#{invalidCharsGroup}]/, {
  invalidCharsGroup: invalidCharsGroup
});
export default invalidChars;