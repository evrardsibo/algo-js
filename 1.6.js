const readlineSync = require("readline-sync");

let number = readlineSync.question('put integers number');
let numberone = readlineSync.question('again');



console.log(number % numberone);

