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

    
   
}

// calculer la moyenne

function average(){
    var moy = 0
    for(var i = 0; i < arr.length; i++) {
        moy += numbe(arr[i]);
    };
    return moy/array.length;
};
 // afiche le minimun 
 
function min (){

    return Math.min (... arr);
};

// affiche le maximun 

function max ()
{
    return Math.max (... arr);
}

multiRand();

console.log(arr);
console.log(average);
console.log(min);
console.log(max);