let sum = 0;

for (let i = 0; i < 5; i++) {
    let random = Math.floor(Math.random() * 90) + 10;
    console.log("Random Numbers are: ", random);
    sum += random;
}

let average = sum / 5;
console.log("Sum: ", sum);
console.log("Average: ", average);