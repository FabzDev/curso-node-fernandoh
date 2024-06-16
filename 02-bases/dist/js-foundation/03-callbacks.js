"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findName = void 0;
const users = [
    {
        id: 1,
        name: "Fabio",
    },
    {
        id: 2,
        name: "Yulieth",
    },
];
function findName(id, callback) {
    const user = users.find(function (user) {
        return user.id == id;
    });
    if (!user) {
        return callback(`❌ ERROR!!! No se encontro el usuario!`, undefined);
    }
    return callback(undefined, user);
}
exports.findName = findName;
