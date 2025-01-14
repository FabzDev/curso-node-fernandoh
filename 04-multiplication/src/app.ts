import { argsPluging } from "./plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

(() => {
    main();
})();


function main() {
    const { b: base, l: limit, s: showTable } = argsPluging
	ServerApp.run({base, limit, showTable});    
}
