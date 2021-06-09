const readlineSync = require('readline-sync');

var age = readlineSync.question('enter you age')

if (age > 18)
{
    console.log('You are an adult')
}
else{

    console.log('You are not yet an adult')
}



