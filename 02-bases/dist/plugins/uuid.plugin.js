"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = void 0;
// const { v4: uuidLibrary } = require('uuid');
const uuid_1 = require("uuid");
const uuid = () => {
    return (0, uuid_1.v4)();
};
exports.uuid = uuid;
// module.exports = {
//     uuid
// }
