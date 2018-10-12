"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
function getArgs() {
    const program = commander;
    program
        .version("1.0.0")
        .option("-s, --swaggerFile <path/to/swagger.doc.json>", "use swagger definition from the path")
        .option("-o, --operationsOut <path/to/generate/operations/>", "generate operations at the location")
        .parse(process.argv);
    const settings = {};
    if (program.swaggerFile) {
        settings.src = program.swaggerFile;
    }
    if (program.operationsOut) {
        settings.dist = program.operationsOut;
    }
    return settings;
}
exports.getArgs = getArgs;
