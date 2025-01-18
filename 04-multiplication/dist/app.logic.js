"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const args_plugin_1 = require("./plugins/args.plugin");
const { b: base, l: limit, s: show } = args_plugin_1.argsPluging;
let outputMsg = '';
const headerMsg = `
==========================
        Tabla del ${base}
==========================
`;
const outDir = 'outputs/';
const fileName = `tabla-${base}`;
for (let i = 0; i < limit; i++) {
    outputMsg += `${base} x ${i + 1} = ${base * (i + 1)}\n`;
}
outputMsg = headerMsg + outputMsg;
if (show)
    console.log(outputMsg);
fs_1.default.mkdirSync(outDir, { recursive: true });
fs_1.default.writeFileSync(`${outDir}${fileName}.txt`, outputMsg);
console.log('File created');
