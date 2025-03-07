const args = process.argv.slice(2);

if (args.length !== 1 || isNaN(args[0]) || parseInt(args[0]) <= 0) {
    console.log("Please provide a positive integer.");
    console.log("Example: node harmonic_number.js 5");
    process.exit(1);
}

const n = parseInt(args[0]);

let harmonic = 0;
for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}

console.log(`The ${n}th harmonic number (H_${n}) is: ${harmonic.toFixed(6)}`);
