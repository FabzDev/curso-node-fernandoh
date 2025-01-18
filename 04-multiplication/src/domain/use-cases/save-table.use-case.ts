import fs from "fs";

export interface SaveTableUseCase {
  execute: (table: string) => boolean;
}

export class SaveTable implements SaveTableUseCase {
  constructor() {}

  execute(table:string) {
    const outDir: string = 'outputs/'
    const fileName: string = `tabla-test`;
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(`${outDir}${fileName}.txt`, table);
    console.log("File created");
    return true
  }
}
