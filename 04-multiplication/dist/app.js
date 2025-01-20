"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const args_plugin_1 = require("./plugins/args.plugin");
const server_app_1 = require("./presentation/server-app");
(() => {
    main();
})();
function main() {
    const { b: base, l: limit, s: showTable, n: tableName, d: tableDest } = args_plugin_1.argsPluging;
    server_app_1.ServerApp.run({ base, limit, showTable, tableName, tableDest });
}
