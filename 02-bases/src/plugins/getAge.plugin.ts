const getAgeLibrary = require('get-age');

export const getAge = (birthday: string) => {
    return new Date().getFullYear() - new Date(birthday).getFullYear();
}


// export const getAge: (input: string) => number  = ( birthday: string ) => {
//     return getAgeLibrary(birthday);
// }

// module.exports = {
//     getAge
// }



