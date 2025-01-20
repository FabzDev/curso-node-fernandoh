"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveTable = void 0;
const fs_1 = __importDefault(require("fs"));
class SaveTable {
    constructor() { }
    execute({ tableContent, fileDest = 'outputs/', fileName }) {
        try {
            fs_1.default.mkdirSync(fileDest, { recursive: true });
            fs_1.default.writeFileSync(`${fileDest}${fileName}.txt`, tableContent);
            console.log("File created");
            return true;
        }
        catch (error) {
            console.log("File not created");
            console.log(error);
            return false;
        }
    }
}
exports.SaveTable = SaveTable;
