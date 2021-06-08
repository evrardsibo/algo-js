const readlineSync = require("readline-sync");

var number = readlineSync.question('put a decimal number');
var numberone = readlineSync.question('again');



console.log(Math.trunc(number)*numberone);

