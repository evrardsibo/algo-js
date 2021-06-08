const readlineSync = require("readline-sync");

var number = readlineSync.question('put integers number');
var numberone = readlineSync.question('again');



console.log(number % numberone);


