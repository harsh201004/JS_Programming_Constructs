//a 1ft = 12 in then 42 in = ? ft
let inches = 42;
let feet = inches / 12;
console.log(inches + " inches = " + feet + " feet");

//b Rectangular Plot of 60 feet x 40 feet in meters
let lengthFeet = 60;
let widthFeet = 40;

let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;

let area = lengthMeters * widthMeters;

console.log("Area: ", area);

//c Calculate area of 25 such plots in acres
let areaMeters = lengthMeters * widthMeters;
let totalAreaMeters = areaMeters * 25;
let totalAreaAcres = totalAreaMeters * 0.000247105;

console.log(`Total area of 25 plots in acres: ${totalAreaAcres.toFixed(5)} acres`);


