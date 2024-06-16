"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroesArr = void 0;
const { env } = process;
console.log(env);
exports.heroesArr = ['Superman', 'Flash', 'Batman'];
const [, , batman] = exports.heroesArr;
console.log(batman);
