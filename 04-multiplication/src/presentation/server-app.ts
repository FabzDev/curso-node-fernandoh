import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveTable } from "../domain/use-cases/save-table.use-case"

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}


export class ServerApp {

    public static run({base, limit, showTable}: RunOptions){
        const table = new CreateTable().execute({base, limit})
         if(showTable) console.log(table);
        const successSavetable = new SaveTable().execute(
            {
                tableContent: table,
                fileDest:'outputs/',
                fileName:`Table ${base}`
            }
        );
    }
}