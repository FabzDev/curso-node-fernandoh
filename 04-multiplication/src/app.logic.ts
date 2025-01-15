import fs from "fs";
import { argsPluging } from "./plugins/args.plugin";

const {b:base, l:limit, s:show} = argsPluging
let outputMsg: string = ''
const headerMsg: string = `
==========================
        Tabla del ${base}
==========================
`;
const outDir: string = 'outputs/'
const fileName: string = `tabla-${base}`;

for(let i=0; i<limit; i++){
    outputMsg += `${base} x ${i+1} = ${base * (i+1)}\n`
}

outputMsg = headerMsg + outputMsg;

if(show) console.log(outputMsg);


fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}${fileName}.txt`, outputMsg);
console.log('File created');