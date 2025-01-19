import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveTable } from "../domain/use-cases/save-table.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  tableName?: string;
  tableDest?: string;
}

export class ServerApp {
  public static run({
    base:base,
    limit:limit,
    showTable:showTable,
    tableName:tableName = `Table-x${base}`,
    tableDest:tableDest = "outputs/",
  }: RunOptions) {
    const table = new CreateTable().execute({ base, limit });

    if (showTable) console.log(table);

    const successSaveTable = new SaveTable().execute({
      tableContent: table,
      fileDest: tableDest,
      fileName: tableName,
    });

    console.log(successSaveTable ? "Archivo guardado" : "Error");
  }
}
