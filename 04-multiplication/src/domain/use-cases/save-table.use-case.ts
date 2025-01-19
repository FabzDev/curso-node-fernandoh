import fs from "fs";

export interface SaveTableUseCase {
  execute: (options: SaveTableOptions) => boolean;
}

export interface SaveTableOptions {
  tableContent: string;
  fileDest?: string;
  fileName?: string;
}

export class SaveTable implements SaveTableUseCase {
  constructor() // dependency injection
  {}

  execute({tableContent, fileDest='outputs/', fileName}: SaveTableOptions) {
    try {
      fs.mkdirSync(fileDest, { recursive: true });
      fs.writeFileSync(`${fileDest}${fileName}.txt`, tableContent);
      console.log("File created");
      return true;
    } catch (error) {
      console.log("File not created");
      console.log(error);
      return false;
    }
  }
}
