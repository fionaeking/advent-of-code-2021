import * as fs from "fs";

// Read in input
let inputValues: Array<string> = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n");

function binary_to_decimal(decimal: number) : number {
  return Math.pow(2, decimal)
}

var gammaRate = 0;
var epsilonRate = 0;
var numberLength = inputValues[0].length;
for (var i = 0; i < numberLength; i++) {
  var sum = inputValues
    .map(function (x) {
      return Number(x[i]);
    })
    .reduce(function (x, y) {
      return x + y;
    }, 0);

  if (sum * 2 > inputValues.length) {
    gammaRate += binary_to_decimal(numberLength - 1 - i);
  } else {
    epsilonRate += binary_to_decimal(numberLength - 1 - i);
  }
}

console.log("Part 1 answer:", gammaRate * epsilonRate);
