export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMsg: string = "";
    for (let i = 0; i < limit; i++) {
      outputMsg += `${base} x ${i + 1} = ${base * (i + 1)}\n`;
    }
    return outputMsg;
  }
}
