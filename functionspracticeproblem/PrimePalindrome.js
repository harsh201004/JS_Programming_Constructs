const prompt = require("prompt-sync")();

function isPrime(num) {
    if (num < 2) return false; 
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false; 
    }
    return true;
}

function getPalindrome(num) {
    let reversed = 0;
    let original = num;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed;
}

// Taking user input
let num = parseInt(prompt("Enter a number: "), 10);

if (isPrime(num)) {
    console.log(`${num} is a Prime Number.`);
    
    let palindrome = getPalindrome(num);
    console.log(`Its palindrome is: ${palindrome}`);

    if (isPrime(palindrome)) {
        console.log(`The palindrome ${palindrome} is also a Prime Number.`);
    } else {
        console.log(`The palindrome ${palindrome} is NOT a Prime Number.`);
    }
} else {
    console.log(`${num} is NOT a Prime Number.`);
}
