import yargs, { boolean } from "yargs";
import { hideBin } from "yargs/helpers";

export const argsPluging = yargs(hideBin(process.argv))
.options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.options('l', {
    alias: 'limite',
    type: 'number',
    default: 10,
    describe: 'Es el limite tablas de multiplicar'
})
.options('s', {
    alias: 'show',
    type: 'boolean',
    demandOption: false,
    describe: 'Mostrar tabla en la consola'
})
.parseSync();
