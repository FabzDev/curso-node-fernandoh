"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findName = void 0;
const users = [
    {
        id: 0,
        name: "Fabio"
    },
    {
        id: 1,
        name: "Yulieth"
    }
];
const findName = (id, callback) => {
    const user = users.find(user => user.id == id);
    if (!user)
        return callback(`❌ ERROR!!! No se encontro el usuario!`, null);
    return callback(null, user);
};
exports.findName = findName;
// function findName( id, callback ) {
//     const user =  users.find( function ( user ){
//         return user.id == id;
//     } )
//     if (!user)
//         return callback(`❌ ERROR!!! No se encontro el usuario!`, null);
//     return callback(null, user)
// }
