import { readFileSync } from "fs";
import { groupBy, toUpper } from "lodash";
import { readAndCompileTemplateFile, writeFileIfContentsIsChanged } from "./utils";
import { ISwagger } from "../interface/ISwagger";
import { resolve } from "path";

export function generatePathFile(swaggerInput: string, pathOutput: string) {
    let swagger = (JSON.parse(readFileSync(swaggerInput, 'utf8').trim()) as ISwagger);
    let paths = Object.keys(swagger.paths);
    let group = groupBy(paths, res => toUpper(res.split('/')[3]));
    let groupArray = Object.keys(group)
        .map(key => {
            let valueArray = group[key].map(val => {
                return {
                    name: toUpper(val.split('/').pop()),
                    path: val
                }
            });
            return {
                key,
                value: valueArray
            }
        })

    let tempPath = resolve(__dirname, '../../templates/path-const-ts.hbs');
    let template = readAndCompileTemplateFile(tempPath);
    let result = template({ paths: groupArray });
    writeFileIfContentsIsChanged(pathOutput, result);
}