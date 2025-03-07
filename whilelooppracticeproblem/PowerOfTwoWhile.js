const args = process.argv.slice(2);

if (args.length !== 1 || isNaN(args[0]) || parseInt(args[0]) < 0) {
    console.log("Please enter a valid non-negative integer.");
    console.log("Example: node power_of_two.js 5");
    process.exit(1);
}

const n = parseInt(args[0]);

console.log(`Powers of 2 up to 2^${n} (or 256 max):`);

let power = 1; 
let i = 0;

while (i <= n && power <= 256) {
    console.log(`2^${i} = ${power}`);
    power *= 2;
    i++;
}
