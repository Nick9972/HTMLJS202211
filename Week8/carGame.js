var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);

var start = 58;
var finish = 956;
var carPos = 2;

var startFuel = 935;
//var startFuel = randomNumber(canvas.width, 600);
var fuel = startFuel;
var fuelBarWidth = 512;
var speed = 4;
var gameOver = true;

var seconds = 3;
var fps = 60;
var frames = fps;
//background
var bg = new Image();
bg.src = "images/desert.jpg";
bg.unload = function(){
    main();
}
//car sprite
var carSprite = new Image();
carSprite.src = "images/plane.png";

carSprite.onload = function(){
    main();
}

//finish line image
var finishLine = new Image();
finishLine.src = "images/finishline.png";
finishLine.onload = function(){
    main();
}

//add some event listeners
document.addEventListener("keydown", keyPressDown);

function keyPressDown(e){
    if(e.keyCode == 32 && gameOver){
        gameOver = false;
    }
    if(fuel <= 0 || speed <= 0){
        //restart game
        restartGame();
    }
}


function main(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(bg, 0,0, canvas.width,canvas.height);
    if(gameOver){
        ctx.fillStyle = "blue";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "black";
        ctx.font = "30px georgia";
        ctx.textAlign = "center"
        ctx.fillText("Press Space to Start", canvas.width/2,canvas.height/2);
    }else{

        if(!gameOver && seconds > 0){
            runStartTimer();
            drawStartTimer();
        }else{
            if(fuel > 0){
                carPos += speed;
                fuel -= speed;
            }
        }
        drawStart();
        drawFinish();
        drawCar();
    


        drawFuelBar();
        if(carPos + 40 > finish || fuel <= 0){
            drawResults();
        }

    }

    timer = requestAnimationFrame(main);
}

function drawStart(){
    ctx.fillStyle = "yellow";
    //start line
    ctx.fillRect(start, 135, 10, 500);
}

function drawFinish(){
    ctx.drawImage(finishLine, finish, 135, 30,500);
}

function drawCar(){
    //draw car
    ctx.drawImage(carSprite, carPos, canvas.height/2, 50, 55);
}

function drawFuelBar(){
    var currentBarWidth = fuelBarWidth * (fuel/startFuel);
    ctx.fillStyle = "black";
    ctx.fillRect(start, 30, fuelBarWidth, 10);
    ctx.fillStyle = "darkorange"
    ctx.font = "25px georgia";
    ctx.fillText("Fuel", start, 25);
    if(fuel > 0){
        ctx.fillStyle = "red";
        ctx.fillRect(start, 30, currentBarWidth, 10);
    }
}

function drawResults(){
    if(carPos + 25 > finish){
        speed = 0;
        ctx.fillStyle = "cyan";
        ctx.font = "40px gerogia";
        ctx.textAlign = "center";
        ctx.fillText("You Made it to the Finish... You Win",canvas.width/2,canvas.height/2);
    }
}

function restartGame(){
    location.reload();
}

function runStartTimer(){
    frames -= 1;
    if(frames < 0){
        frames = fps;
        seconds -= 1;
    }
}

function drawStartTimer(){
    ctx.fillStyle = "lawngreen";
    ctx.font = "60px georgia";
    ctx.textAlign = "center";
    ctx.fillText(seconds,canvas.width/2,canvas.height/2);
}

function randomNumber(high,low){
    return Math.round(Math.random() * (high-low)+low);
}