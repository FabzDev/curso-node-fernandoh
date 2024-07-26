import { argsPluging } from "../plugins/args.plugin";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}


export class ServerApp {

    public static run(options: RunOptions){
        console.log('Server Running...');
        console.log(options);
    }
}