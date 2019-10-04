var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const scoreBoard_Id = document.getElementById('score');

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function updateScore(resultType, userChoice_div){
    if(resultType === "tie"){
        //changing the color of the option border       
        userChoice_div.classList.add('gray-glow');
        setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
        //chnaging the color of the scoreboard border
        scoreBoard_Id.classList.add('gray-glow');
        setTimeout(() => scoreBoard_Id.classList.remove('gray-glow'), 300); 
        //increasing the score     
        userScore = userScore + 1;
        userScore_span.innerHTML = userScore;
        computerScore = computerScore + 1;
        computerScore_span.innerHTML = computerScore;
        
    }else if(resultType === "userWin"){
        userChoice_div.classList.add('green-glow');
        setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
        scoreBoard_Id.classList.add('green-glow');
        setTimeout(() => scoreBoard_Id.classList.remove('green-glow'), 300);
        userScore = userScore + 1;
        userScore_span.innerHTML = userScore;       

    }else{
        userChoice_div.classList.add('red-glow');   
        setTimeout(() => userChoice_div.classList.remove('red-glow'), 300); 
        scoreBoard_Id.classList.add('red-glow');
        setTimeout(() => scoreBoard_Id.classList.remove('red-glow'), 300);  
        computerScore = computerScore + 1;
        computerScore_span.innerHTML = computerScore;            
    }
}

function game(userChoice){

    const userChoice_div = document.getElementById(userChoice);
    const computerChoice = getComputerChoice();
    const calculateOutput = userChoice.concat(computerChoice);

    switch(calculateOutput){
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            result_p.innerHTML = "You Both Chose " + userChoice.toUpperCase() + ". Its a TIE!!!"
            updateScore("tie", userChoice_div);
            break;

        case "rockscissors":
            result_p.innerHTML = "ROCK smashes SCISSORS. The USER wins!!!!"
            updateScore("userWin", userChoice_div);
            break;
        case "scissosrpaper":
            result_p.innerHTML = "SCISSORS cuts PAPER. The USER wins!!!!"
            updateScore("userWin", userChoice_div);
            break;
        case "paperrock":
            result_p.innerHTML = "PAPER covers ROCK. The USER wins!!!!" 
            updateScore("userWin", userChoice_div);
            break;
        
        case "paperscissors":
            result_p.innerHTML = "PAPER is cut by SCISSORS. The COMPUTER wins!!!!"
            updateScore("computerWin", userChoice_div);
            break;   
        case "scissorsrock":
            result_p.innerHTML = "SCISSORS is smashed by ROCKS. The COMPUTER wins!!!!"
            updateScore("computerWin", userChoice_div);
            break;
        case "rockpaper":
            result_p.innerHTML = "ROCK is covered by PAPER. The COMPUTER wins!!!!"
            updateScore("computerWin", userChoice_div);
            break;
    }
} 

function main(){
    rock_div.addEventListener('click', function(){
        game("rock"); 
    });

    paper_div.addEventListener('click', function(){
        game("paper");
    });

    scissors_div.addEventListener('click', function(){
        game("scissors");
    });
}

main();