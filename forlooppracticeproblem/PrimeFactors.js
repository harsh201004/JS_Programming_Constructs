const args = process.argv.slice(2);

if (args.length !== 1 || isNaN(args[0]) || parseInt(args[0]) < 2) {
    console.log("Please enter a valid integer greater than 1.");
    console.log("Example: node prime_factors.js 56");
    process.exit(1);
}

let num = parseInt(args[0]);

console.log(`Prime factors of ${num}:`);

while (num % 2 === 0) {
    console.log(2);
    num /= 2;
}

for (let i = 3; i * i <= num; i += 2) {
    while (num % i === 0) {
        console.log(i);
        num /= i;
    }
}

if (num > 1) {
    console.log(num);
}
