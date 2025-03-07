const args = process.argv.slice(2);

if (args.length !== 2 || isNaN(args[0]) || isNaN(args[1])) {
    console.log("Please enter two valid numbers as a range.");
    console.log("Example: node prime_range.js 10 50");
    process.exit(1);
}

let start = parseInt(args[0]);
let end = parseInt(args[1]);

if (start > end) {
    [start, end] = [end, start]; 
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(`Prime numbers between ${start} and ${end}:`);
for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
