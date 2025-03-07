const prompt = require("prompt-sync")();

console.log("Flipping a coin until either Heads or Tails wins 11 times...");

let headsCount = 0;
let tailsCount = 0;
const winningScore = 11;

while (headsCount < winningScore && tailsCount < winningScore) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails";
    console.log(`Coin Flip: ${flip}`);

    if (flip === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Score -> Heads: ${headsCount}, Tails: ${tailsCount}`);
    prompt("Press Enter to flip again...");
}

console.log(`\nGame Over! ${headsCount === winningScore ? "Heads" : "Tails"} wins with 11 flips! 🎉`);
