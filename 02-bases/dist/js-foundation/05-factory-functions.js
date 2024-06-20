"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPersonFactory = void 0;
const buildPersonFactory = ({ uuidPlug, agePlug }) => {
    return (name, birthday) => {
        return {
            id: uuidPlug(),
            name,
            birthday,
            age: agePlug(birthday),
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
