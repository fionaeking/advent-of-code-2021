import * as fs from "fs";

// Read in input
let inputValues: Array<string> = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n");

var gammaRate = 0;
var epsilonRate = 0;
for (var i = 0; i < inputValues[0].length; i++) {
  var sum = inputValues
    .map(function (x) {
      return Number(x[i]);
    })
    .reduce(function (x, y) {
      return x + y;
    }, 0);

  if (sum * 2 > inputValues.length) {
    gammaRate += Math.pow(2, inputValues[0].length - 1 - i);
  } else {
    epsilonRate += Math.pow(2, inputValues[0].length - 1 - i);
  }
}

console.log("Part 1 Answer", gammaRate * epsilonRate);
