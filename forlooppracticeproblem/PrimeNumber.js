const args = process.argv.slice(2);

if (args.length !== 1 || isNaN(args[0]) || parseInt(args[0]) < 1) {
    console.log("Please enter a positive integer.");
    console.log("Example: node is_prime.js 7");
    process.exit(1);
}

const num = parseInt(args[0]);

function isPrime(n) {
    if (n < 2) return false; 
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true;
}

console.log(num + (isPrime(num) ? " is a Prime Number." : " is NOT a Prime Number."));
