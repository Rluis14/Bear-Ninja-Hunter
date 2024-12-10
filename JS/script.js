// Define the choices in an array
const choicesArray = ["Bear", "Ninja", "Hunter"];

// Variables to track game stats
let totalRounds = 0;
let wins = 0;
let losses = 0;
let ties = 0;

// Countdown from 3 to 0 in the console before displaying results
console.log("Countdown:");
for (let i = 3; i >= 0; i--) {
    console.log(i);
}

// Prompt the user to enter their name
let playerName = prompt("Welcome to Bear Ninja Hunter! Please enter your name to get started:");

// Check if the name is empty or the user clicked cancel
if (playerName === null || playerName.trim() === "") {
    document.getElementById("display").innerHTML = `
        <p>Invalid Entry</p>
        <p>Please Press F5 to Play Again.</p>
    `;
} else {
    alert(`Hi ${playerName}, welcome to Bear Ninja Hunter! Let's Play!!`);

    // Start the game loop
    let playAgain = true;
    while (playAgain) {
        // Prompt the user to choose Bear, Ninja, or Hunter
        let playerChoice = prompt("Who are you: Bear, Ninja, or Hunter?");

        // Handle invalid input (empty or cancel)
        if (playerChoice === null || playerChoice.trim() === "") {
            document.getElementById("display").innerHTML = `
                <p>Invalid Entry</p>
                <p>Please Press F5 to Play Again.</p>
            `;
            break;
        }

        // Force case to standardize input (e.g., Rock, ROCK, rock → Rock)
        playerChoice = playerChoice.trim().toLowerCase();
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

        // Validate input against the array
        if (!choicesArray.includes(playerChoice)) {
            document.getElementById("display").innerHTML = `
                <p>Invalid Entry</p>
                <p>Please Press F5 to Play Again.</p>
            `;
            break;
        }

        // Generate a random choice for the computer
        const computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];

        // Determine the winner
        let result;
        if (playerChoice === computerChoice) {
            result = "It's a tie!";
            ties++;
        } else if (
            (playerChoice === "Bear" && computerChoice === "Ninja") ||
            (playerChoice === "Ninja" && computerChoice === "Hunter") ||
            (playerChoice === "Hunter" && computerChoice === "Bear")
        ) {
            result = `You win! ${playerChoice} beats ${computerChoice}.`;
            wins++;
        } else {
            result = `You lose! ${computerChoice} beats ${playerChoice}.`;
            losses++;
        }

        // Increment total rounds
        totalRounds++;

        // Display results in HTML and console
        const gameMessage = `
            <p>${playerName}, you chose ${playerChoice}!</p>
            <p>The computer chose ${computerChoice}.</p>
            <p>${result}</p>
            <p>Total Rounds Played: ${totalRounds}</p>
            <p>Wins: ${wins}, Losses: ${losses}, Ties: ${ties}</p>
        `;

        document.getElementById("display").innerHTML = gameMessage;
        console.log(`${playerName}, you chose ${playerChoice}`);
        console.log(`The computer chose ${computerChoice}`);
        console.log(result);
        console.log(`Total Rounds Played: ${totalRounds}, Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);

        // Ask the user if they want to play again
        let playAgainInput = prompt(`${playerName}, would you like to play again? Yes or No?`);
        if (!playAgainInput || playAgainInput.trim().toLowerCase() !== "yes") {
            playAgain = false;

            // Display final results in HTML
            document.getElementById("display").innerHTML += `
                <p><strong>Final Results:</strong></p>
                <p>Total Rounds Played: ${totalRounds}</p>
                <p>Wins: ${wins}, Losses: ${losses}, Ties: ${ties}</p>
            `;
            alert("Thanks for playing! Check your game history below.");
        }
    }
}
