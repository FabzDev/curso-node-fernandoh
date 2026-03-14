import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
  static start() {
    CronService.createJob("*/5 * * * * *", () => {
      new CheckService(
        () => console.log("Success"),
        (error: string) => console.log(`errors: ${error})`),
      ).execute("https://g3oogle.com");

    });
  }
}
