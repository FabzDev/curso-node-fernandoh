import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronServer } from "./cron/cron-server";

export class Server {
  static start() {
    
    CronServer.createJob("*/5 * * * * *", () =>
      
      new CheckService (
        () => console.log("Ping succeded!"),
        (errorMsg: string) => console.log(`Error: ${errorMsg}`)
      ).execute("https://google.com"),
    );
  }
}
