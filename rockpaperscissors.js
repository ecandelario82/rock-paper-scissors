

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
        return userInput;
    } else if (userInput === 'paper') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput;
    } else {
        console.log('This is not a valid choice');
    }
};



//selects random item 
const getComputerChoice = () => {
    choices = {0: 'rock', 1: 'paper', 2: 'scissors'};
   return this.choices[Math.floor(Math.random() * 3)];
}



//Determines winner with variables
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice)
        return 'It is a tie!'
    
    
    if (userChoice === 'rock') {
        if (computerChoice === 'paper')
            return 'The computer wins!';
        if (userChoice === 'rock')
            if (computerChoice === 'scissors')
                return 'Great job! You are the winner!';
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors')
            return 'The computer wins!';
        if (userChoice === 'paper')
            if (computerChoice === 'rock')
                return 'Great job! You are the winner!';
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock')
            return 'The computer wins!';
        if (userChoice === 'scissors')
            if (computerChoice === 'paper')
                return 'Great job! You are the winner!';
    }
};
            


const playGame = () => {
     userChoice = getUserChoice('rock');
    computerChoice = getComputerChoice();
    ;
    
    console.log(`You chose ${userChoice}`);
    console.log(`The computer chose ${computerChoice}`);
   console.log(determineWinner(userChoice, computerChoice));
}

