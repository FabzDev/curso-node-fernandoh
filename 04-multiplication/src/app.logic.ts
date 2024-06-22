import fs from "fs";

const base = 3;
let outputMsg: string = ''
const headerMsg: string = `
==========================
        Tabla del ${base}
==========================
`;
const outDir: string = 'outputs/'
const fileName: string = `tabla${base}`

for(let i=0; i<10; i++){
    outputMsg += `${base} x ${i+1} = ${base * (i+1)}\n`
}

outputMsg = headerMsg + outputMsg;

fs.mkdirSync(outDir, {recursive: true})
fs.writeFileSync(`${outDir}${fileName}.txt`, outputMsg);