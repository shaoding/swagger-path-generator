#!/usr/bin/env node

import { getArgs } from "./cli";
import { generatePathFile } from "./lib/generatePathFile";

function generatePath() {
    const args =  getArgs();
    generatePathFile(args.src, args.dist);
}

generatePath();
