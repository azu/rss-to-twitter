// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import regexSupplant from '../lib/regexSupplant';
import validateUrlDomain from './validateUrlDomain';
import validateUrlIp from './validateUrlIp';
var validateUrlHost = regexSupplant('(?:' + '#{validateUrlIp}|' + '#{validateUrlDomain}' + ')', {
  validateUrlIp: validateUrlIp,
  validateUrlDomain: validateUrlDomain
}, 'i');
export default validateUrlHost;