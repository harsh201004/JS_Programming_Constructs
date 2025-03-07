const prompt = require("prompt-sync")(); 

const num = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc.): "), 10);

let place;
switch (num) {
    case 1: place = "Unit"; break;
    case 10: place = "Ten"; break;
    case 100: place = "Hundred"; break;
    case 1000: place = "Thousand"; break;
    case 10000: place = "Ten Thousand"; break;
    case 100000: place = "Lakh"; break;
    case 1000000: place = "Million"; break;
    default: place = "Please enter a valid number (1, 10, 100, 1000, etc.).";
}

// Print the result
console.log(`The place value is: ${place}`);