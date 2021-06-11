// declare une fonction
function calcsurface(longueur , largeur)
{
    return longueur*largeur
}
const readlineSync = require("readline-sync");

// declaration des variables 

var numbe = readlineSync.question("Enter length : ");
var number = readlineSync.question("Enter width : ");

// execution fonction

var surface = calcsurface(numbe,number)

 // resultat

 console.log(surface)