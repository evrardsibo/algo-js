// function pour calculer la distance entres deux points

function evr(a) {
    return a*a;
}
function calcDistance(x1, y1, x2, y2) {
    return Math.sqrt(evr(y2 - y1) + evr(x2 - x1));
}
 
console.log(calcDistance(1,1,2,2));
console.log(calcDistance(1,1,3,1));
console.log(calcDistance(4,1,1,1));
console.log(calcDistance(-2,2,2,-2));