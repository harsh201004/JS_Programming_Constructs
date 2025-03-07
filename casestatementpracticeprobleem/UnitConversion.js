const prompt = require("prompt-sync")(); 

console.log("Choose a unit conversion:");
console.log("1. Feet to Inches");
console.log("2. Feet to Meters");
console.log("3. Inches to Feet");
console.log("4. Meters to Feet");

const choice = parseInt(prompt("Enter your choice (1-4): "), 10);

if (isNaN(choice) || choice < 1 || choice > 4) {
    console.log("Invalid choice! Please enter a number between 1 and 4.");
    process.exit(1);
}

const value = parseFloat(prompt("Enter the value to convert: "));

let result;
switch (choice) {
    case 1:
        result = value * 12; // 1 Foot = 12 Inches
        console.log(`${value} Feet = ${result} Inches`);
        break;
    case 2:
        result = value * 0.3048; // 1 Foot = 0.3048 Meters
        console.log(`${value} Feet = ${result.toFixed(4)} Meters`);
        break;
    case 3:
        result = value / 12; // 1 Inch = 1/12 Feet
        console.log(`${value} Inches = ${result.toFixed(4)} Feet`);
        break;
    case 4:
        result = value * 3.28084; // 1 Meter = 3.28084 Feet
        console.log(`${value} Meters = ${result.toFixed(4)} Feet`);
        break;
    default:
        console.log("Invalid choice! Please enter a valid option.");
}