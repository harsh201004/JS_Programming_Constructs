const args = process.argv.slice(2);

if (args.length !== 1 || isNaN(args[0]) || parseInt(args[0]) < 0) {
    console.log("Please enter a non-negative integer.");
    console.log("Example: node factorial.js 5");
    process.exit(1);
}

const num = parseInt(args[0]);

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(`${num}! = ${factorial(num)}`);
