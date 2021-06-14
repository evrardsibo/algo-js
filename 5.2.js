const readlineSync = require("readline-sync");

// declarer fonction pour serie 

function askTvSerie(){


//   declarer variable tableau

    var caste = [];

    var castnam= readlineSync.question('Enter the name of an actor. Write Q to quit : ');

    while(castnam!== 'Q'){
        caste.push(castnam);
        castnam = readlineSync.question('Remember the name of another actor ? Write Q to quit : ');
        if(castnam == 'Q'){
            console.log('Ok');
        }
    }

    var favoriteTvSerie = {
        
        cast : caste
    }
     
    return favoriteTvSerie;
};



function randomizeCast(){
    var tvSerie = askTvSerie();
    var newCast = tvSerie.cast.sort(() => Math.random() - 0.5);
    console.log(newCast);
    
    var nextSerie = {
        newTitle : readlineSync.question(' What is the name of the next TV show ? : '),
        cast : newCast
    } // resultat

    console.log(nextSerie);
}
randomizeCast();