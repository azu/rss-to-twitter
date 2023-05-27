"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const github_action_helper_1 = require("@technote-space/github-action-helper");
const issue_1 = require("./utils/issue");
const misc_1 = require("./utils/misc");
exports.execute = (logger, octokit, context) => __awaiter(void 0, void 0, void 0, function* () {
    logger.startProcess('Dump context');
    console.log(misc_1.getPayload(context));
    logger.startProcess('Command test');
    const command = new github_action_helper_1.Command(logger);
    yield command.execAsync({
        command: 'ls -lat',
    });
    logger.startProcess('Color text');
    logger.info('green text: %s', logger.c('green', { color: 'red', attribute: 'bold' }));
    logger.warn('warning!');
    logger.error('error!!!');
    logger.debug('debug...');
    logger.log('log log log');
    logger.startProcess('Get issues');
    const issues = yield issue_1.getIssues(octokit, context);
    console.log(issues.map(issue => issue.title));
    logger.endProcess();
});
