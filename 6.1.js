class Circle {
    constructor (xPos , yPos, radius){

        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius ;
    }

    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
        return `new informatiuon circle ${this.xPos} et ${this.yPos}`;
    } 
    get surface(){
        return this.radius * this.radius * Math.PI
    }
}
var ring = new Circle(3,3,6);
console.log(ring.surface);
console.log(ring.move(3,3));