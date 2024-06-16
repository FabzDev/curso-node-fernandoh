"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = void 0;
const axios_1 = __importDefault(require("axios"));
exports.httpClient = {
    get: async (url) => {
        const resp = await axios_1.default.get(url);
        return resp.data;
    },
    post: () => { },
    put: () => { },
    delete: () => { },
};
// module.exports = {
//     httpPlugin: httpClientPlugin
// }
