import fs from "fs";

const tabla5: string = `
==========================
        Tabla del 5
==========================

5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
`;

function createTable(number: string, tabla: string){
    fs.writeFileSync(`outputs/tabla${number}.txt`, tabla);
    console.log('5', tabla);
}

createTable('5', tabla5);

