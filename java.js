function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() *3);

    switch (randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
           
    }
};





function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection){
        return "It's a tie!";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }

    else{
        return `Opps! You loose...${computerSelection} beats ${playerSelection}`
    }

};

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i=1;i<=5;i++){
        console.log(`Round ${i}: `);

        let playerSelection = prompt("Please choose one from  Rock, paper or scissor : ").toLowerCase();
        console.log("Your choice :" , playerSelection);
        let computerSelection = getComputerChoice();
        console.log("Computer choice :" ,computerSelection);

        let roundResult = playRound(playerSelection,computerSelection)
        console.log(roundResult)

        if (roundResult.includes("You win")){
            playerScore++;
        }
        else if (roundResult.includes("You loose")){
            computerScore++
        }

        console.log(`Score card : You = ${playerScore} - Computer = ${computerScore}`)



        
    }

    if (playerScore > computerScore){
        console.log("You win the game");
    }else if (playerScore < computerScore){
        console.log("Computer wins the game");
    } else {
        console.log("It's a tie game!");
    }


}


playGame();