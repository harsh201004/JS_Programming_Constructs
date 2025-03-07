let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100);
}

console.log("Generated numbers:", numbers);
console.log("Minimum value:", Math.min(...numbers));
console.log("Maximum value:", Math.max(...numbers));
