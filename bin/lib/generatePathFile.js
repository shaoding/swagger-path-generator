"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const utils_1 = require("./utils");
const path_1 = require("path");
function generatePathFile(swaggerInput, pathOutput) {
    let swagger = JSON.parse(fs_1.readFileSync(swaggerInput, 'utf8').trim());
    let paths = Object.keys(swagger.paths);
    let group = lodash_1.groupBy(paths, res => lodash_1.toUpper(res.split('/')[3]));
    let groupArray = Object.keys(group)
        .map(key => {
        let valueArray = group[key].map(val => {
            return {
                name: lodash_1.toUpper(val.split('/').pop()),
                path: val
            };
        });
        return {
            key,
            value: valueArray
        };
    });
    let tempPath = path_1.resolve(__dirname, '../../templates/path-const-ts.hbs');
    let template = utils_1.readAndCompileTemplateFile(tempPath);
    let result = template({ paths: groupArray });
    utils_1.writeFileIfContentsIsChanged(pathOutput, result);
}
exports.generatePathFile = generatePathFile;
