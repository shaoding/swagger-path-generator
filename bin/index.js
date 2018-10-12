#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("./cli");
const generatePathFile_1 = require("./lib/generatePathFile");
function generatePath() {
    const args = cli_1.getArgs();
    generatePathFile_1.generatePathFile(args.src, args.dist);
}
generatePath();
