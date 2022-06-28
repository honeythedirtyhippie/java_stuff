//global variables
let userScore = 0;
let computerScore = 0;
let compChoice;
let result;
let userChoice;
//compChoice
compPrompt = function() {
    let randomNum = Math.floor(Math.random()*3);
    switch(randomNum) {
        case 0:
            return compChoice = "rock";
            break;
        case 1:
            return compChoice = "paper";
            break;
        case 2:
            return compChoice = "scissors";
            break;
    }
    return compChoice
};

//userChoice
userPrompt = function() {
   userChoice = prompt("Rock, Paper, Scissors?","".toLowerCase());
   return userChoice;
};

//round loop
let eachRound = (userChoice, compChoice) => {
    if (userChoice === "rock" && compChoice === "paper") {
        computerScore++;
        return result = (`You lose ${compChoice} beats ${userChoice}`);
        
    }
    else if (userChoice === "paper" && compChoice === "scissors") {
        computerScore++;
        return result = (`You lose ${compChoice} beats ${userChoice}`);
        
    }
    else if (userChoice === "scissors" && compChoice === "rock") {
        computerScore++;
        return result = (`You lose ${compChoice} beats ${userChoice}`);
        
    }
    else if (userChoice === compChoice) {
        return result = (`You both chose ${compChoice}, it's a tie.`);
        
    }
    else if (userChoice === "rock" && compChoice === "scissors") {
        userScore++;
        return result = (`${userChoice} beats ${compChoice}, you win!`);
        
    }
    else if (userChoice === "paper" && compChoice === "rock") {
        userScore++;
        return result = (`${userChoice} beats ${compChoice}, you win!`);
        
    }
    else if (userChoice === "scissors" && compChoice === "paper") {
        userScore++;
        return result = (`${userChoice} beats ${compChoice}, you win!`);
        
    }
    else {
        return result = (`input error: ${userChoice}`);
        clear;
    }
};

game = function() {
    for(userScore = 0, computerScore = 0; userScore+computerScore <5;) {
        eachRound(userPrompt(), compPrompt())
        console.log(`${result}
        user: ${userScore}
        comp: ${computerScore}
        total: ${userScore+computerScore}`)
    }    
};

game();