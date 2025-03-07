const prompt = require("prompt-sync")();

console.log("Think of a number between 1 and 100.");

let low = 1, high = 100;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    let isCorrect = prompt(`Is your number ${mid}? (yes/no): `).toLowerCase();
    if (isCorrect === "yes") {
        console.log(`Great! Your magic number is: ${mid}`);
        break;
    }

    let isGreater = prompt(`Is your number greater than ${mid}? (yes/no): `).toLowerCase();
    if (isGreater === "yes") {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

console.log("Game Over");
