"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const create_table_use_case_1 = require("../domain/use-cases/create-table.use-case");
class ServerApp {
    static run({ base, limit, showTable }) {
        const table = new create_table_use_case_1.CreateTable().execute({ base, limit });
        if (showTable)
            console.log(table);
    }
}
exports.ServerApp = ServerApp;
