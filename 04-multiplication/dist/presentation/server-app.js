"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const create_table_use_case_1 = require("../domain/use-cases/create-table.use-case");
const save_table_use_case_1 = require("../domain/use-cases/save-table.use-case");
class ServerApp {
    static run({ base: base, limit: limit, showTable: showTable, tableName: tableName = `Table-x${base}`, tableDest: tableDest = "outputs/", }) {
        const table = new create_table_use_case_1.CreateTable().execute({ base, limit });
        if (showTable)
            console.log(table);
        const successSaveTable = new save_table_use_case_1.SaveTable().execute({
            tableContent: table,
            fileDest: tableDest,
            fileName: tableName,
        });
        console.log(successSaveTable ? "Archivo guardado" : "Error");
    }
}
exports.ServerApp = ServerApp;
