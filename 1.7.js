const readlineSync = require("readline-sync");

var shoe = readlineSync.question('your shoe size');
var birth = readlineSync.question(' your birth year');

var mult = shoe * 2 ;
var add = mult + 5 ;
var multi = add * 50 ;
var sub = multi - birth ;
var adde = sub + 1766 ;

console.log(adde)

