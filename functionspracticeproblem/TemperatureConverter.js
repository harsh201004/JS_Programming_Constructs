const prompt = require("prompt-sync")();

function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5/9;
}

console.log("1: Celsius to Fahrenheit");
console.log("2: Fahrenheit to Celsius");

let choice = parseInt(prompt("Enter your choice (1 or 2): "));

if (choice === 1) {
    let c = parseFloat(prompt("Enter °C (0 - 100): "));
    if (c >= 0 && c <= 100) 
        console.log(`${c}°C = ${celsiusToFahrenheit(c).toFixed(2)}°F`);
    else 
        console.log("Invalid input! Enter between 0 and 100.");
} 
else if (choice === 2) {
    let f = parseFloat(prompt("Enter °F (32 - 212): "));
    if (f >= 32 && f <= 212) 
        console.log(`${f}°F = ${fahrenheitToCelsius(f).toFixed(2)}°C`);
    else 
        console.log("Invalid input! Enter between 32 and 212.");
} 
else {
    console.log("Invalid choice! Enter 1 or 2.");
}
