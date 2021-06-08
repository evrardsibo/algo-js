const readlineSync = require("readline-sync");

let number = readlineSync.question('put a decimal number');
let numberone = readlineSync.question('again');



console.log(Math.trunc(number)*numberone);

