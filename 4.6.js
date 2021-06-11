// fonction renvoie un nombre factorielle
function factorial(evr) {
    if (evr === 0){
        return 1;
    }

return evr * factorial (evr-1);

}
 
console.log(factorial(3));

