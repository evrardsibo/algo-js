const readlineSync = require("readline-sync");

var number = readlineSync.question("enter number");


var sum = 0;
for (var i = 0 ;i < number ; i ++){
    var again = readlineSync.question("enter new number");
    
    sum =  sum + parseInt(again);  
}
console.log( sum);
