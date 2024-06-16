"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPersonFactory = void 0;
const plugins_1 = require("../plugins");
const buildPersonFactory = (plugOptMaker) => {
    return (name, birthday) => {
        return {
            id: (0, plugins_1.uuidPlugin)(),
            name,
            birthday,
            age: (0, plugins_1.getAgePlugin)(birthday),
        };
    };
};
exports.buildPersonFactory = buildPersonFactory;
// module.exports = {
// 	buildPersonFactory,
// };
// const buildPersonFactory = factoryFuntion.buildPersonFactory;
// const buildPerson = buildPersonFactory(uuid, getAge);
// const fabio = { name: "Fabio", birthday: "04-04-1990" }
