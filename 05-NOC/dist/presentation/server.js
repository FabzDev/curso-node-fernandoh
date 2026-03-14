"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const check_service_1 = require("../domain/use-cases/checks/check-service");
const cron_service_1 = require("./cron/cron-service");
class Server {
    static start() {
        cron_service_1.CronService.createJob("*/3 * * * * *", () => {
            new check_service_1.CheckService(() => console.log("Success"), (error) => console.log(`errors: `)).execute("https://google.com");
        });
    }
}
exports.Server = Server;
