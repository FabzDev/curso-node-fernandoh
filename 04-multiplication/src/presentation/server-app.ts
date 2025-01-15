import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { argsPluging } from "../plugins/args.plugin";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}


export class ServerApp {

    public static run({base, limit, showTable}: RunOptions){
        const table = new CreateTable().execute({base, limit})
         if(showTable) console.log(table);
    }

}