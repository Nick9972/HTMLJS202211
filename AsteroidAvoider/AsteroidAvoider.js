var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var ship
var numAsteroids = 20
var asteroids = []
var gameOver = true
var gameStates = []
var currentState = 0
var score = 0
var highScore = 0
var orbTime = 0
var radius = 20

var powerDur = 0

var powerUp = false
var orb

var timeStop = false


var bg = new Image();
bg.src = "images/start.png";

var end = new Image();
end.src = "images/end.png"

//ship sprite
var shipSprite = new Image();
shipSprite.src = "images/xwing.png";

shipSprite.onload = function(){
    main();
}

//tie fighter sprite
var fighterSprite = new Image();
fighterSprite.src = "images/tiefighter.png";

fighterSprite.onload = function(){
    main();
}

//utility functions
function randomRange(high, low){
    return Math.random() * (high-low) + low
}

function gameStart(){
    //For Loop to create the instances of Asteroids
    for(var i = 0; i < numAsteroids; i++){
        asteroids[i] = new Asteroid()
    }

    //Create an instance of the PlayerShip
    ship = new PlayerShip()

    orb = new Orb()
}

//Constructor Function for Asteroid Class
function Asteroid(){
    this.radius = randomRange(40,25)
    this.x = randomRange(canvas.width - this.radius, this.radius) + canvas.width
    this.y = randomRange(canvas.height - this.radius, this.radius)
    this.vx = randomRange(-6, -3)
    this.fighterColor = randomRange(7,0)

    this.drawAsteroid = function(){
        ctx.save()
        //ctx.beginPath()
        //ctx.fillStyle = this.color
        //ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        //ctx.closePath()
        //ctx.fill()
        ctx.drawImage(fighterSprite, this.x, this.y,this.radius,this.radius)
        ctx.restore()
    }


}



//Setup Keyboard Event Handlers 
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e){
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = true
        }
        if (e.keyCode == 65) {
            ship.left = true
        }
        if (e.keyCode == 68) {
            ship.right = true
        }
        if (e.keyCode == 83) {
            ship.down = true
        }
    }

    if(gameOver){

        //checking for spacebar
        if(e.keyCode == 32){
            if(currentState == 2){
                //game over screen reatarts game
                currentState = 0
                //resets number of asteroids
                numAsteroids = 20
                //empties asteroids array
                asteroids = []
                //resets score
                score = 0
                gameStart()
                main()
            }
            else{
                //main screen starts game 
                gameStart()
                currentState = 1
                gameOver = false
                main()
                scoreTimer()
                console.log("space")

            }
            
        }
    }
    
}

function pressKeyUp(e){
    if(!gameOver){
        if (e.keyCode == 87) {
            ship.up = false
        }
        if (e.keyCode == 65) {
            ship.left = false
        }
        if (e.keyCode == 68) {
            ship.right = false
        }
        if (e.keyCode == 83) {
            ship.down = false
        } 
    }
    
}

//Powerup constructor
function Orb(){
    this.x = (canvas.width - radius)
    this.y = (canvas.height/2)
    this.vx = -10
    this.drawOrb = function(){
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "cyan"
        ctx.arc(this.x + 100, this.y, radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.fillStyle = "lightblue"
        ctx.arc(this.x + 100, this.y, (radius - 2), 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.fillStyle = "palegoldenrod"
        ctx.arc(this.x + 100, this.y, (radius - 8), 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore();
        
        if(this.x < -canvas.width || powerUp == true){
            this.x = ((canvas.width) + radius)
            //timeStop = false
        }
    }
}

//constructor function
function PlayerShip(){
    this.x = (canvas.width/2 - 300)
    this.y = (canvas.height/2 - 100)
    this.w = 20
    this.h = 50
    this.vx = 0
    this.vy = 0
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.flamelength = 30

    this.drawShip = function(){
       ctx.save()
        ctx.translate(this.x, this.y)
        if(this.up || this.down || this.right){
            ctx.save()
            //Changes the drawing values to animate the flame
            if(this.flamelength == 30){
                this.flamelength = 20
                ctx.fillStyle = "yellow"
            }else{
                
                this.flamelength = 30
                ctx.fillStyle = "orange"
            }
            ctx.beginPath();
            ctx.moveTo(-this.flamelength, -6);
            ctx.lineTo(0,-8);
            ctx.lineTo(0,-2);
            ctx.lineTo(-this.flamelength, -6);
            ctx.moveTo(-this.flamelength, 6);
            ctx.lineTo(0,8);
            ctx.lineTo(0,2);
            ctx.lineTo(-this.flamelength, 6);
            ctx.closePath();
            ctx.fill();
            ctx.restore();

        }
        ctx.fillStyle = "black"
        ctx.beginPath()
        ctx.moveTo(0, -24)
        ctx.lineTo(50, 0)
        ctx.lineTo(0, 24)
        ctx.lineTo(0, -24)
        ctx.closePath()
        ctx.fill(); 
        ctx.drawImage(shipSprite, -5,-25,50,50)
        ctx.restore();

        if(powerUp==true){
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = "cyan"
            ctx.strokeStyle = "cyan"
            ctx.arc(this.x + 10, this.y, 40, 0, 2 * Math.PI, true);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
    }

    this.move = function(){
        this.x += this.vx
        this.y += this.vy

        //bottom boundary of screen
        if(this.y > canvas.height - this.h/2){
            this.y = canvas.height - this.h/2
            this.vy = 0
        }
        //top boundary of screen
        if(this.y < this.h/2){
            this.y = this.h/2
            this.vy = 0
        }

        //right boundary of screen
        if(this.x > canvas.width - this.w/2){
            this.x = canvas.width - this.w/2
            this.vx = 0
        }
        //left boundary of screen
        if(this.x < this.w/2){
            this.x = this.w/2
            this.vx = 0
        }
    }
      
}



//Main Screen
gameStates[0] = function(){
    orbTime = 0
    ctx.save()
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)
    ctx.font = "30px Arial"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText("Asteroid Avoider", canvas.width/2, canvas.height/2-30)
    ctx.font = "15px Arial"
    ctx.fillText("Press Space to Start", canvas.width/2, canvas.height/2 + 20)
    ctx.restore()

}

//Game Screen
gameStates[1] = function(){
    //code for displaying score
    ctx.save()
    ctx.font = "15px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()

    console.log(timeStop)
    console.log(orbTime);

    if(orbTime > 500){
        orb.drawOrb()
        orb.x += orb.vx;
    }

    if(powerUp == true){
        powerDur++
        timeStop = true
    }
    if(powerDur == 300){
        powerUp = false
        orbTime = 0
        timeStop = false
        powerDur = 0
    }

    //if(timeStop == false){
        orbTime += 10
    //}

    if (powerUp == false) {
        var oX = ship.x - orb.x;
        var oY = ship.y - orb.y;
        var oDist = Math.sqrt((oX * oX) + (oY * oY))
        //console.log(ship.h / 2 + (radius-10));
        if (orbCol(oDist, (ship.h / 2 + (radius-10)))) {
            console.log("Powerup")
            powerUp = true;
            console.log(powerUp);
        }
    }



    //Vertical 
    if(ship.up){
        ship.vy = -6
    }else if(ship.down){
        ship.vy = 6
    }else{
        ship.vy = 0
    }
    
    //Horizontal Movement
    if(ship.right){
        ship.vx = 6
    }else{
        ship.vx = -3
    }

    //Loops through all asteroids and can check their position
    for(var i = 0; i < asteroids.length; i++){
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX*dX)+(dY*dY))
        if (powerUp == false) {
            if (detectCollision(distance, (ship.h / 2 + (asteroids[i].radius - 10)))) {
                console.log("hit asteroid")
                gameOver = true
                currentState = 2
                main()

            }
        }

    


        if(asteroids[i].x < canvas.height + asteroids[i].radius - 875){
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius) + canvas.width
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius)
        }
        if(!gameOver){
            asteroids[i].x += asteroids[i].vx
            asteroids[i].drawAsteroid()
        }
    }
    if(!gameOver){
        ship.move()
        ship.drawShip()
    }

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid())
    }
}

//Game Over
gameStates[2] = function(){
    if(score > highScore){
        //set a new high score
        highScore = score
        ctx.save()
        ctx.drawImage(end,0,0,canvas.width,canvas.height - 250)
        ctx.font = "30px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("Your high score score was: " + score.toString() , canvas.width/2, canvas.height/2+90)
        ctx.fillText("Your new high score is: " + highScore.toString() , canvas.width/2, canvas.height/2+60)
        ctx.fillText("New Record", canvas.width/2, canvas.height/2 + 30)
        ctx.font = "15px Arial"
        ctx.fillStyle = "lightblue"
        ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 175)
        ctx.restore()

    }else{
        //keep same score new high score
        ctx.save()
        ctx.drawImage(end,0,0,canvas.width,canvas.height - 250)
        ctx.font = "30px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your score was: " + score.toString() , canvas.width/2, canvas.height/2+90)
        ctx.fillText("Your high score is: " + highScore.toString() , canvas.width/2, canvas.height/2+60)
        ctx.font = "15px Arial"
        ctx.fillStyle = "lightblue"
        ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 175)
        ctx.restore()
    }
    
   
}

function main(){
    //clear canvas 
    //shipY-=1
    ctx.clearRect(0,0,canvas.width, canvas.height)

    gameStates[currentState]()

    if(!gameOver){
        timer = requestAnimationFrame(main)
    }
    
}

function detectCollision(distance, calcDistance) {
    return distance < calcDistance
}

function orbCol(oDist, calcDistance) {
    return oDist < calcDistance
}


//Timer for Score
function scoreTimer() {
    if (!gameOver) {
        score++
        //using modulus  that returns remainder of a decimal
        //checks to see if remainder is divisble by 5
        if(score % 5 == 0){
            numAsteroids += 5
            console.log(numAsteroids)
        }

        setTimeout(scoreTimer, 1000)
    }

}
