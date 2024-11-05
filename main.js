#!/usr/bin/env node

const lib = require("./lib");

let command = process.argv[2]; //명령어

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

if (numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}
        

let result;
switch (command) {
    case "avg":
        result = lib.avg(numbers);
        break;
    case "prime":
        result = lib.prime(numbers);
        break;
    case "factorial":
        result = lib.factorial(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);

