// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import cyrillicLettersAndMarks from './cyrillicLettersAndMarks';
import latinAccentChars from './latinAccentChars';
import regexSupplant from '../lib/regexSupplant';
var validGeneralUrlPathChars = regexSupplant(/[a-z#{cyrillicLettersAndMarks}0-9!\*';:=\+,\.\$\/%#\[\]\-\u2013_~@\|&#{latinAccentChars}]/i, {
  cyrillicLettersAndMarks: cyrillicLettersAndMarks,
  latinAccentChars: latinAccentChars
});
export default validGeneralUrlPathChars;