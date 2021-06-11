// generer un nombre aleatoire entre 1 et 10

const readlineSync = require("readline-sync");

function rand10 (max,min)
{
    return Math.floor(Math.random () *(max - min + 1) + min);
}

var arr = []
var max = 10;
var min = 1 ;
var numbe = readlineSync.question("Enter the less than 10 : ");

// generer un nombre aleatoire dans un tableau

function multiRand ()
{
    
    for( var i = 0 ; i < numbe ; i++);{

       arr.push(rand10(max,min))

    }

    console.log(arr);
   
}
multiRand();








