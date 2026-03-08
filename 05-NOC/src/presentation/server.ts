import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
  static start() {
    CronService.createJob("*/3 * * * * *", () => {
      new CheckService().execute('https://google.com')
    });
  }
}