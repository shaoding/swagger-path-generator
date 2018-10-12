import { readFileSync, writeFileSync, existsSync } from "fs";
import { compile } from "handlebars";

export const ENCODING = 'utf8';

export function readAndCompileTemplateFile(templatePath: string) {
    let templateSource = readFileSync(templatePath, ENCODING);
    let template = compile(templateSource);
    return template;
}

export function writeFileIfContentsIsChanged(outputFileName: string, contents: string) {
    let isChanged = true;
    if (existsSync(outputFileName)) {
        let oldContents = readFile(outputFileName);
        isChanged = oldContents !== contents;
    }
    if (isChanged) {
        writeFile(outputFileName, contents);
    }
    return isChanged;
}

function readFile(outputFileName: string) {
    let file = readFileSync(outputFileName, ENCODING);
    return file;
}

function writeFile(outputFileName: string, contents: string) {
    writeFileSync(outputFileName, contents, { flag: 'w', encoding: ENCODING });
}
