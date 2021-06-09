const readlineSync = require('readline-sync');

var min =readlineSync.question('enter three numbers');
var max =readlineSync.question('enter three numbers bigger than the first');
var current =readlineSync.question('current');



if(min > max)

{

    console.log('sorry dont continue ');
}
else if( (current > min) && (current < max) ) 
 {
    console.log('current is betwin enter three numbers and bigger than the first ');
}
else{
    console.log('try next time')
}





