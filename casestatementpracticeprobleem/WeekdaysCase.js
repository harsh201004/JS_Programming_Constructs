const prompt = require("prompt-sync")();

// Take input from the user
const num = parseInt(prompt("Enter a number (1-7): "), 10);

if (isNaN(num) || num < 1 || num > 7) {
    console.log("Please enter a valid number between 1 and 7.");
} else {
    let day;
    switch (num) {
        case 1: day = "Sunday"; break;
        case 2: day = "Monday"; break;
        case 3: day = "Tuesday"; break;
        case 4: day = "Wednesday"; break;
        case 5: day = "Thursday"; break;
        case 6: day = "Friday"; break;
        case 7: day = "Saturday"; break;
        default: day = "Invalid Input"; 
    }

    console.log(`The day is: ${day}`);
}
