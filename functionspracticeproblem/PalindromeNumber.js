const prompt = require("prompt-sync")();

function isPalindrome(num) {
    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;      
        reversed = reversed * 10 + digit;  
        num = Math.floor(num / 10); 
    }

    return original === reversed;
}

// Taking user input
let num1 = parseInt(prompt("Enter number: "), 10);

// Checking for palindromes
console.log(`${num1} is palindrome? ${isPalindrome(num1) ? "Yes" : "No"}`);

