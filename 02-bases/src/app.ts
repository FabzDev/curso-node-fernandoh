
// TEMPLATE
// import { template as temp } from "./js-foundation/01-template";
// console.log(temp);

// DESTRUCTURE
// import {heroesArr} from "./js-foundation/02-destructure";
// console.log(heroesArr);

// CALLBACKS
import { findName } from "./js-foundation/03-callbacks";
findName(1, (user, error) => {
    if (!user) throw new Error(error)
    console.log(user.name);
});

//ARROW: igual que callbacks pero con arrow functions
// import { findName } from "./js-foundation/04-arrow";
// console.log( findName(0, (error: string, name: String) => {
//     if (!name) throw new Error(error)
//     return name;
// }));

// FACTORY FUNCTIONS
// import { uuidPlugin, getAgePlugin} from './plugins'
// import { buildPersonFactory } from './js-foundation/05-factory-functions';
// const personFactory = buildPersonFactory(uuidPlugin, getAgePlugin);
// const fabio = personFactory('Fabio', '04-04-1990');
// console.log(fabio);

//PROMISES
// import { getPokemon } from './js-foundation/06-promises'
// getPokemon(4)
// .then( myFavPoke => console.log(myFavPoke) )
// .catch( error => console.log(error) )
// .finally( () => console.log('Promesa cumplida')
// )

// LOGGER
// import { buildLoggerPlugin } from "./plugins";
// const loggerPlugin = buildLoggerPlugin('app.js');
// loggerPlugin.log("hola mundo");
// loggerPlugin.error("esto es malo");