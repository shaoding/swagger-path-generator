"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const handlebars_1 = require("handlebars");
exports.ENCODING = 'utf8';
function readAndCompileTemplateFile(templatePath) {
    let templateSource = fs_1.readFileSync(templatePath, exports.ENCODING);
    let template = handlebars_1.compile(templateSource);
    return template;
}
exports.readAndCompileTemplateFile = readAndCompileTemplateFile;
function writeFileIfContentsIsChanged(outputFileName, contents) {
    let isChanged = true;
    if (fs_1.existsSync(outputFileName)) {
        let oldContents = readFile(outputFileName);
        isChanged = oldContents !== contents;
    }
    if (isChanged) {
        writeFile(outputFileName, contents);
    }
    return isChanged;
}
exports.writeFileIfContentsIsChanged = writeFileIfContentsIsChanged;
function readFile(outputFileName) {
    let file = fs_1.readFileSync(outputFileName, exports.ENCODING);
    return file;
}
function writeFile(outputFileName, contents) {
    fs_1.writeFileSync(outputFileName, contents, { flag: 'w', encoding: exports.ENCODING });
}
