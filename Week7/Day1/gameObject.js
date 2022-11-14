var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var speed = 10;

//Random Number Function
function randomRange(high, low){
    return Math.random() * (high - low) + low;
}


function GameObject(){
    //Examples of Properties of a Class
    this.width = randomRange(50,10);
    this.height = this.width;
    this.radius = randomRange(50,2);
    this.x = randomRange(canvas.width, 0);
    this.y = randomRange(canvas.height, 0);
    this.vx = randomRange(speed,-speed);
    this.vy = randomRange(speed,-speed);

    this.color = `rgb(${randomRange(255,0)},${randomRange(255,0)},${randomRange(255,0)})`;

    //This is an Example of a Method for a Function
    this.drawSquare = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    this.drawCircle = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        ctx.closePath();
        ctx.fill();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;

        //Bottom of Canvas
        if(this.y > canvas.height - this.radius){
            //Make Sure it Doesn't Leave the Screen
            this.y = canvas.height - this.radius;
            this.vy = -this.vy;
        }
        //Top of Canvas
        if(this.y < this.radius){
            this.y = this.radius;
            this.vy = this.vy * -1;
        }
        //Right Side of Canvas
        if(this.x > canvas.width - this.radius){
            this.x = canvas.width - this.radius;
            this.vx = -this.vx;
        }
        //Left Side of Canvas
        if(this.x < this.radius){
            this.x = this.radius;
            this.vx = this.vx *-1;
        }

    }

}

//Make a New Instance of the Square
var square = new GameObject();

//Use Dot Syntax to Draw the Square
square.drawSquare();

var square2 = new GameObject();
square2.drawSquare();

var squares = [];
/*
squares[0] = new GameObject
squares[1] = new GameObject
squares[2] = new GameObject
squares[3] = new GameObject
squares[4] = new GameObject
squares[5] = new GameObject

squares[0].drawSquare()
squares[1].drawSquare()
squares[2].drawSquare()
squares[3].drawSquare()
squares[4].drawSquare()
squares[5].drawSquare()
*/
/*var numSquares = 1000;

for(var i = 0; i<numSquares; i++){
    squares[i] = new GameObject
    squares[i].drawSquare();
}*/

var circles = [];
var numCircles = 10;

for(var i = 0; i<numCircles;i++){
    circles[i] = new GameObject();
    circles[i].drawCircle();
}

function main(){
    //Clear the Canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //Loop Through All Objects in the Array
    for(var i = 0; i<circles.length; i++){
        circles[i].move();
        //Draw the Circles to the Screen
        circles[i].drawCircle();
    }
    //Request Animation Frame
    timer = requestAnimationFrame(main);
}
main();