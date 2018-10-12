import * as commander from "commander";
import { ISetting } from "./interface/ISetting";

export function getArgs(){
    const program = commander;

    program
      .version("1.0.0")
      .option("-s, --swaggerFile <path/to/swagger.doc.json>", "use swagger definition from the path")
      .option("-o, --operationsOut <path/to/generate/operations/>", "generate operations at the location")
      .parse(process.argv);

    const settings: ISetting = {} as ISetting;

    if (program.swaggerFile){
        settings.src = program.swaggerFile;
      }
    if (program.operationsOut){
        settings.dist =  program.operationsOut;
      }
    return settings;
}