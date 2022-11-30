function playGame(playerChoice) {
    if (gameOver == true) {
        return;
    } else {
        var cpuChoice = Math.floor(Math.random() * 3.99);
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
                    draw(hrock, paper, scissors, lizard, spock, rock, paper, scissors, hlizard, spock)
                }
                else {
                    //spock
                    results = "Computer chose Spock. You lose"
                    draw(hrock, paper, scissors, lizard, spock, rock, paper, scissors, lizard, hspock)
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
                    draw(rock, hpaper, scissors, lizard, spock, rock, paper, scissors, hlizard, spock)
                }
                else {
                    //spock
                    results = "Computer chose Spock. You win!"
                    draw(rock, hpaper, scissors, lizard, spock, rock, paper, scissors, lizard, hspock)
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
                    draw(rock, paper, hscissors, lizard, spock, rock, paper, scissors, hlizard, spock)
                }
                else {
                    //spock
                    results = "Computer chose Spock. You lose!"
                    draw(rock, paper, hscissors, lizard, spock, rock, paper, scissors, lizard, hspock)
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
                        draw(rock, paper, scissors, hlizard, spock, rock, paper, scissors, hlizard, spock)
                    }
                    else {
                        //spock
                        results = "Computer chose Spock. You win!"
                        draw(rock, paper, scissors, hlizard, spock, rock, paper, scissors, lizard, hspock)
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
                            draw(rock, paper, scissors, lizard, hspock, rock, paper, scissors, hlizard, spock)
                        }
                        else {
                            //spock
                            results = "Computer chose Spock. You tie!"
                            draw(rock, paper, scissors, lizard, hspock, rock, paper, scissors, lizard, hspock)
                        }
        
                        break;
        }
    }

}