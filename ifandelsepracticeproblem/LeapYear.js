const year = 2024;

if (year < 1000 || year > 9999) {
    console.log("Please enter a valid 4-digit year.");
} else {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    console.log(`${year} is ${isLeapYear ? "a Leap Year" : "not a Leap Year"}`);
}