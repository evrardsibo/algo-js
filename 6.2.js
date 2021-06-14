// declaration class

class Rectangle {
    constructor ( topLeftXPos , topLeftYPos , width , length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length ;


    }
     //détection de collision

    collides(){
        
        var x = 120;
        var y = 120;
        var w = 60;
        var h = 120; 
        var distX = Math.abs(x - (this.topLeftXpos - this.length/2));
        var distY = Math.abs(y - (this.topLeftYpos - this.width/2));
        if(distX > (this.length/2 + w/2) && (distY > this.width/2 + h/2)){
            console.log('false');
        }else{
            console.log("true");
        }
        
    }
}
let recta = new Rectangle(120,120,120,60);
recta.collides();



