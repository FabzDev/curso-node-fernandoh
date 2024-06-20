"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAgeLibrary = require('get-age');
const getAge = (birthday) => {
    return new Date().getFullYear() - new Date(birthday).getFullYear();
};
exports.getAge = getAge;
// export const getAge: (input: string) => number  = ( birthday: string ) => {
//     return getAgeLibrary(birthday);
// }
// module.exports = {
//     getAge
// }
