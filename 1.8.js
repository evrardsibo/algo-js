const readlineSync = require("readline-sync");

var rest = [];

var story = ["Dis-moi ton age","tu as du travail"," vous vivez dans quel ville","toujours chez tes parents ?"];

var numQuest = story.length;

for (var i = 0; i < story.length; i++) {
    rest.push(readlineSync.question(story[i]));
    console.log(" reste "+(numQuest-i-1)+" question ");
}

console.log("si tu as cette age "+rest[0]+" et que tu travail "+rest[1]+" ou tu vis dans la meme ville "+rest[2]+" qu eux il faudra aller te faire soinger "+rest[3]+".");

