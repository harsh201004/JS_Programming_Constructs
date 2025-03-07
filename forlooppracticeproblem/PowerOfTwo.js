const args = process.argv.slice(2);

if (args.length !== 1 || isNaN(args[0])) {
    console.log("Please provide a valid number.");
    console.log("Example: node powers_of_2.js 5");
    process.exit(1);
} 

const n = parseInt(args[0]);

console.log(`Powers of 2 up to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${2 ** i}`);
}
