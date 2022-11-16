var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var rock = new Image();
var paper = new Image();
var scissors = new Image();

var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();

rock.src = "images/rock.jpg";
paper.src = "images/paper.jpg";
scissors.src = "images/scissors.jpg";

hrock.src = "images/rock2.jpg";
hpaper.src = "images/paper2.jpg";
hscissors.src = "images/scissors2.jpg";

hscissors.onload = function(){
    draw(rock, paper, scissors, rock, paper, scissors);
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

var gameOver = true;
var results = "Select Rock, Paper, or Scissors"

function onKeyDown(e){
    console.log(e.keyCode);
}

function onKeyUp(e){
    if(e.keyCode == 32){
        console.log("You Pressed the Spacebar")
        gameOver = false;
        draw(rock, paper, scissors, rock, paper, scissors);
    }
}


function draw(rock, paper, scissors, crock, cpaper, cscissors){
    if(gameOver == true){
        //drawing the fonts
        ctx.font = "40px Arial";
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "green";
        ctx.textAlign = "center";
        ctx.fillText("Welcome to the RPS Game!", canvas.width/2,280);
        ctx.fillText("Press Space to Start", canvas.width/2,320);
        ctx.strokeText("Welcome to the RPS Game!", canvas.width/2,280);
    }
    else{

        ctx.save();
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "pink";
        ctx.fillText("Player Choice", canvas.width/2, 100);
        ctx.drawImage(rock, canvas.width/2- rock.width/2 - 100, 150);
        ctx.drawImage(paper, canvas.width/2- paper.width/2, 150);
        ctx.drawImage(scissors, canvas.width/2 - scissors.width/2 + 100, 150);
    //computer choices
        ctx.fillText("Computer Choice", canvas.width/2, 325);
        ctx.drawImage(crock, canvas.width/2- rock.width/2 - 100, 375);
        ctx.drawImage(cpaper, canvas.width/2- paper.width/2, 375);
        ctx.drawImage(cscissors, canvas.width/2- scissors.width/2 + 100, 375);

        ctx.fillText(results, canvas.width/2, 525);
        ctx.restore();
    }
}
    


//Alert("select rock, paper, or scissor!");
var rps = ["rock","paper","scissors"];
//console.log(rps[2]);

document.getElementById("rock").addEventListener('click', function (e) {
    //alert("You Picked " + rps[0]);
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener('click', function (e) {
    //alert("You Picked " + rps[1]);
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener('click', function (e) {
    //alert("You Picked " + rps[2]);
    playGame(rps[2]);
});

function playGame(playerChoice){
    if(gameOver == true) {
        return;
    } else {
        function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    alert(rps[pChoice] + " " + rps[cChoice]) 

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                alert(`You Tied`)
            }
            else if(cChoice === 1)
            {
                //display a loss
                //alert(`You Lost`)
                results = "CPUT Chose Paper, you lost"
                draw(hrock, paper, scissors, hrock, paper, scissors);
            }
            else
            {
                //display a win
                //alert(`You Won`)
                draw(rock, hpaper, scissors, rock, hpaper, scissors);
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    //alert(`You Win`)
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    alert(`Tie`)
                }
                else
                {
                    //display a win
                    alert(`You Lost`)
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    //alert(`You Lost`)
                    draw(rock, hpaper, scissors, rock, hpaper, scissors);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    //alert(`You Win`)
                    draw(rock, paper, hscissors, rock, paper, hscissors);
                }
                else
                {
                    //display a win
                    //alert(`You Tie`)
                    draw(rock, hpaper, scissors, rock, paper, hscissors); 
                }
             break;
    }
}

    }
}

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
