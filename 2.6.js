const readlineSync = require("readline-sync");

var number = readlineSync.question('enter a number between 1 and 7');

switch(number)
{
    case '1' :
        console.log('monday');
        break;

        case '2' :
        console.log('tuesday');
        break;

        case '3' :
        console.log('wednesday');
        break;

        case '4' :
        console.log('thuesday');
        break;

        case '5' :
        console.log('friday');
        break;

        case '6' :
        console.log('saturday');
        break;

        case '7' :
        console.log('sunday');
        break;

        default:
            console.log('error')
}
