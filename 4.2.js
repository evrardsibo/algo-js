// generer un nombre aleatoire entre 1 et 10

function rand10 (max,min)
{
    return Math.floor (Math.random () *(max - min + 1) + min);
}
const readlineSync = require("readline-sync");

var numbe = readlineSync.question("Enter the less than 10 : ");
var max = 10;
var min = 1 ;

var alea = rand10(max,min)

 
 console.log(alea)
