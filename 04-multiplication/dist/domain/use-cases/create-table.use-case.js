"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    constructor() { }
    execute({ base, limit = 10 }) {
        let outputMsg = "";
        for (let i = 0; i < limit; i++) {
            outputMsg += `${base} x ${i + 1} = ${base * (i + 1)}\n`;
        }
        return outputMsg;
    }
}
exports.CreateTable = CreateTable;
