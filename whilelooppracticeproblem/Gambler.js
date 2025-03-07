const prompt = require("prompt-sync")();

let money = 100;
const goal = 200;
let bets = 0;
let wins = 0;

console.log("Welcome to the Gambler's Game ");
console.log("You start with Rs 100. Your goal is to reach Rs 200 or go broke.\n");

while (money > 0 && money < goal) {
    bets++;

    let betResult = Math.random() < 0.5 ? "Lose" : "Win";

    if (betResult === "Win") {
        money++;
        wins++;
    } else {
        money--;
    }

    console.log(`Bet ${bets}: ${betResult} | Current Balance: Rs ${money}`);
    prompt("Press Enter to place the next bet...");
}

console.log("\nGame Over!");
console.log(`Total Bets Made: ${bets}`);
console.log(`Total Wins: ${wins}`);

if (money === 200) {
    console.log("Congratulations! You reached Rs 200!");
} else {
    console.log("You went broke!");
}
