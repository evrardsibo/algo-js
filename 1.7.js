const readlineSync = require("readline-sync");

let shoe = readlineSync.question('your shoe size');
let birth = readlineSync.question(' your birth year');

let mult = shoe * 2 ;
let add = mult + 5 ;
let multi = add * 50 ;
let sub = multi - birth ;
let adde = sub + 1766 ;

console.log(adde)


