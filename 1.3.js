const readlineSync = require("readline-sync");

let name = readlineSync.question('your name');
let firstname = readlineSync.question('your firstname');
let city = readlineSync.question('your live where');



console.log("My is name" +" " +name + "My firstname is" + firstname + "and i live" + city);
