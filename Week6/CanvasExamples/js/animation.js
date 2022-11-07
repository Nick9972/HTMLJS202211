var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);
var x = 100;
var y = 300;
var speedX = 10;
var speedY = 5;

var mario = new Image();
mario.src = "images/mario.png";
mario.onload = function(){
    main();
}

var bg = new Image();
bg.src = "images/galaxy.jpg";
bg.unload = function(){
    main();
}

function main(){
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(bg, 0,0, canvas.width,canvas.height)
    /*
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x,300,20,0,2*Math.PI,true);
    ctx.fill();
    */
//draw sprite image
    ctx.drawImage(mario, x, y, 100,100)

    x += speedX;
    y += speedY;
    if(x > canvas.width - 75 || x < -20){
        speedX *= -1;
    }
    if(y > canvas.height -80 || y < -10){
        speedY *= -1;
    }
    console.log(speedX);
    timer = requestAnimationFrame(main);
}

