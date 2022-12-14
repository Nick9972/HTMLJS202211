//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();
//lizard spock
var lizard = new Image();
var hlizard = new Image();
var spock = new Image();
var hspock = new Image();

rock.src = "images/rock.png";
paper.src = "images/paper.png";
scissors.src = "images/scissors.png";

hrock.src = "images/hrock.png";
hpaper.src = "images/hpaper.png";
hscissors.src = "images/hscissors.png";
//lizard spock
lizard.src = "images/lizard.png";
hlizard.src = "images/hlizard.png";
spock.src = "images/spock.png";
hspock.src = "images/hspock.png";

hscissors.onload = function () {
    draw(rock, paper, scissors, lizard, spock, rock, paper, scissors, lizard, spock);
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

var gameOver = true;
var results = "Select Rock, Paper, Scissors, Lizard, or Spock";

function onKeyDown(e) {
    console.log(e.keyCode);

}

function onKeyUp(e) {
    if (e.keyCode == 32) {
        console.log("You pressed the spacebar");
        gameOver = false;
        draw(rock, paper, scissors, lizard, spock, rock, paper, scissors, lizard, spock);
    }
}


function draw(rock, paper, scissors, lizard, spock, crock, cpaper, cscissors, clizard, cspock) {
    if (gameOver == true) {
        //drawing the fonts
        ctx.font = "40px Impact";
        ctx.fillStyle = "darkgreen";
        ctx.strokeStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("Welcome to Rock Paper Scissors Lizard Spock!", canvas.width / 2, 280);
        ctx.strokeText("Welcome to Rock Paper Scissors Lizard Spock!", canvas.width / 2, 280);
        ctx.fillStyle = "darkblue"
        ctx.fillText("Press Space to Start", canvas.width / 2, 330);
    }
    else {

        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "30px Comic Sans MS"
        ctx.textAlign = "center"
        ctx.fillStyle = "brown";
        ctx.fillText("Player Choice", canvas.width / 2, 100);
        ctx.drawImage(rock, canvas.width / 2 - rock.width / 2 - 200, 150);
        ctx.drawImage(paper, canvas.width / 2 - paper.width / 2 - 100, 150);
        ctx.drawImage(scissors, canvas.width / 2 - scissors.width / 2, 150);
        //lizard spock
        ctx.drawImage(lizard, canvas.width / 2 - lizard.width / 2 + 100, 150);
        ctx.drawImage(spock, canvas.width / 2 - spock.width / 2 + 200, 150);
        //computer choices
        ctx.fillText("Computer Choice", canvas.width / 2, 325);
        ctx.drawImage(crock, canvas.width / 2 - crock.width / 2 - 200, 375);
        ctx.drawImage(cpaper, canvas.width / 2 - cpaper.width / 2 - 100, 375);
        ctx.drawImage(cscissors, canvas.width / 2 - cscissors.width / 2, 375);
        //lizard spock
        ctx.drawImage(clizard, canvas.width / 2 - clizard.width / 2 + 100, 375);
        ctx.drawImage(cspock, canvas.width / 2 - cspock.width / 2 + 200, 375);

        ctx.fillText(results, canvas.width / 2, 525);
        ctx.restore();
    }

}


//alert("Select rock, paper, or scissors!");
var rps = ["rock", "paper", "scissors", "lizard","spock"];
//console.log(rps[2]);

document.getElementById("rock").addEventListener('click', function (e) {
    //alert("You picked " + rps[0]);
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener('click', function (e) {
    //alert("You picked " + rps[1]);
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener('click', function (e) {
    //alert("You picked " + rps[2]);
    playGame(rps[2]);
});
document.getElementById("lizard").addEventListener('click', function (e) {
    //alert("You picked " + rps[3]);
    playGame(rps[3]);
});
document.getElementById("spock").addEventListener('click', function (e) {
    //alert("You picked " + rps[4]);
    playGame(rps[4]);
});

function playGame(playerChoice) {
    if (gameOver == true) {
        return;
    } else {
        var cpuChoice = Math.floor(Math.random() * 4.99);
        console.log(cpuChoice, playerChoice);

        switch (playerChoice) {
            case "rock":
                if (cpuChoice == 0) {
                    //rock
                    results = "Computer chose Rock. It's a tie!";
                    draw(hrock, paper, scissors, lizard, spock, hrock, paper, scissors, lizard, spock);
                }
                else if (cpuChoice == 1) {
                    //paper
                    results = "Computer chose Paper. You lose!";
                    draw(hrock, paper, scissors, lizard, spock, rock, hpaper, scissors, lizard, spock);
                }
                else if (cpuChoice == 2) {
                    //scissors
                    results = "Computer chose Scissors. You win!";
                    draw(hrock, paper, scissors, lizard, spock, rock, paper, hscissors, lizard, spock);
                }
                else if (cpuChoice == 3) {
                    //lizard
                    results = "Computer chose Lizard. You win!";
                    draw(hrock, paper, scissors, lizard, spock, rock, paper, scissors, hlizard, spock);
                }
                else {
                    //spock
                    results = "Computer chose Spock. You lose"
                    draw(hrock, paper, scissors, lizard, spock, rock, paper, scissors, lizard, hspock);
                }

                break;

            case "paper":
                if (cpuChoice == 0) {
                    //rock
                    results = "Computer chose Rock. You win!";
                    draw(rock, hpaper, scissors, lizard, spock, hrock, paper, scissors, lizard, spock);
                }
                else if (cpuChoice == 1) {
                    //paper
                    results = "Computer chose Paper. You tie!";
                    draw(rock, hpaper, scissors, lizard, spock, rock, hpaper, scissors, lizard, spock);
                }
                else if (cpuChoice == 2) {
                    //scissors
                    results = "Computer chose Scissors. You lose!";
                    draw(rock, hpaper, scissors, lizard, spock, rock, paper, hscissors, lizard, spock);
                }
                else if (cpuChoice == 3) {
                    //lizard
                    results = "Computer chose Lizard. You lose!";
                    draw(rock, hpaper, scissors, lizard, spock, rock, paper, scissors, hlizard, spock);
                }
                else {
                    //spock
                    results = "Computer chose Spock. You win!"
                    draw(rock, hpaper, scissors, lizard, spock, rock, paper, scissors, lizard, hspock);
                }

                break;

            case "scissors":
                if (cpuChoice == 0) {
                    //rock
                    results = "Computer chose Rock. You lose!";
                    draw(rock, paper, hscissors, lizard, spock, hrock, paper, scissors, lizard, spock);
                }
                else if (cpuChoice == 1) {
                    //paper
                    results = "Computer chose Paper. You win!";
                    draw(rock, paper, hscissors, lizard, spock, rock, hpaper, scissors, lizard, spock);
                }
                else if (cpuChoice == 2) {
                    //scissors
                    results = "Computer chose Scissors. You tie!";
                    draw(rock, paper, hscissors, lizard, spock, rock, paper, hscissors, lizard, spock);
                }
                else if (cpuChoice == 3) {
                    //lizard
                    results = "Computer chose Lizard. You win!";
                    draw(rock, paper, hscissors, lizard, spock, rock, paper, scissors, hlizard, spock);
                }
                else {
                    //spock
                    results = "Computer chose Spock. You lose!"
                    draw(rock, paper, hscissors, lizard, spock, rock, paper, scissors, lizard, hspock);
                }

                break;

                case "lizard":
                    if (cpuChoice == 0) {
                        //rock
                        results = "Computer chose Rock. You lose!";
                        draw(rock, paper, scissors, hlizard, spock, hrock, paper, scissors, lizard, spock);
                    }
                    else if (cpuChoice == 1) {
                        //paper
                        results = "Computer chose Paper. You win!";
                        draw(rock, paper, scissors, hlizard, spock, rock, hpaper, scissors, lizard, spock);
                    }
                    else if (cpuChoice == 2) {
                        //scissors
                        results = "Computer chose Scissors. You lose!";
                        draw(rock, paper, scissors, hlizard, spock, rock, paper, hscissors, lizard, spock);
                    }
                    else if (cpuChoice == 3) {
                        //lizard
                        results = "Computer chose Lizard. You tie!";
                        draw(rock, paper, scissors, hlizard, spock, rock, paper, scissors, hlizard, spock);
                    }
                    else {
                        //spock
                        results = "Computer chose Spock. You win!"
                        draw(rock, paper, scissors, hlizard, spock, rock, paper, scissors, lizard, hspock);
                    }
    
                    break;

                    case "spock":
                        if (cpuChoice == 0) {
                            //rock
                            results = "Computer chose Rock. You win!";
                            draw(rock, paper, scissors, lizard, hspock, hrock, paper, scissors, lizard, spock);
                        }
                        else if (cpuChoice == 1) {
                            //paper
                            results = "Computer chose Paper. You lose!";
                            draw(rock, paper, scissors, lizard, hspock, rock, hpaper, scissors, lizard, spock);
                        }
                        else if (cpuChoice == 2) {
                            //scissors
                            results = "Computer chose Scissors. You win!";
                            draw(rock, paper, scissors, lizard, hspock, rock, paper, hscissors, lizard, spock);
                        }
                        else if (cpuChoice == 3) {
                            //lizard
                            results = "Computer chose Lizard. You lose!";
                            draw(rock, paper, scissors, lizard, hspock, rock, paper, scissors, hlizard, spock);
                        }
                        else {
                            //spock
                            results = "Computer chose Spock. You tie!"
                            draw(rock, paper, scissors, lizard, hspock, rock, paper, scissors, lizard, hspock);
                        }
        
                        break;
        }
    }

}