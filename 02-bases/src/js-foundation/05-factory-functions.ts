import { uuidPlugin, getAgePlugin} from '../plugins'

interface pluginsOptionMaker {
    uuidPlug: () => string, 
    agePlug: (birthday: string) => number
}

export const buildPersonFactory = ({ uuidPlug, agePlug }: pluginsOptionMaker) => {
	return ( name: string, birthday: string ) => {
		return {
			id: uuidPlug(),
			name,
			birthday,
			age: agePlug(birthday),
		};
	};
};

// module.exports = {
// 	buildPersonFactory,
// };

// const buildPersonFactory = factoryFuntion.buildPersonFactory;

// const buildPerson = buildPersonFactory(uuid, getAge);

// const fabio = { name: "Fabio", birthday: "04-04-1990" }