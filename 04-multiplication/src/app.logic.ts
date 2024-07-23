import fs from "fs";
import { argsPluging } from "./plugins/args.plugin";

const base = argsPluging.b;
let outputMsg: string = ''
const headerMsg: string = `
==========================
        Tabla del ${base}
==========================
`;
const outDir: string = 'outputs/'
const fileName: string = `tabla-${argsPluging.b}`

for(let i=0; i<argsPluging.l; i++){
    outputMsg += `${base} x ${i+1} = ${base * (i+1)}\n`
}

outputMsg = headerMsg + outputMsg;

if(argsPluging.s) console.log(outputMsg);

fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(`${outDir}${fileName}.txt`, outputMsg);