const args = process.argv.slice(2);


if (args.length !== 2) {
    console.log("Usage: node checkDate.js <day> <month>");
    process.exit(1);
}

const day = parseInt(args[0], 10);
const month = parseInt(args[1], 10);

const isValid =
    (month === 3 && day >= 20) || 
    (month > 3 && month < 6) ||  
    (month === 6 && day <= 20);  

console.log(isValid);