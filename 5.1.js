  
const readlineSync = require("readline-sync");
// declarer fonction pour serie 
function askTvSerie(){

    var nam = readlineSync.question(' your fovorite tv serie name? : ');

    var prod = readlineSync.question(' prduction year ? : ');
//   declarer variable tableau

    var caste = [];

    var castnam = readlineSync.question('the cast members. Write Q to quit : ');

    while(castnam !== 'Q'){
        caste.push(castnam);
        castnam = readlineSync.question('Remember the cast members ? Write Q to quit : ');
        if(castnam == 'Q'){
            console.log('Ok');
        }
    }

    var favoriteTvSerie = {
        title : nam,
        productionDate : prod,
        cast : caste
    }
     
    return favoriteTvSerie;
};

// gerener un fichier JSON

var tvSerie = {
     serie : JSON.stringify(askTvSerie())
}

// resultat

console.log(tvSerie);