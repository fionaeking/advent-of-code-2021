import * as fs from "fs";

function median(inputArray: number[]) {
  inputArray.sort(function (a: number, b: number) {
    return a - b;
  });
  var half = Math.floor(inputArray.length / 2);
  return inputArray.length % 2
    ? inputArray[half]
    : (inputArray[half - 1] + inputArray[half]) / 2;
}

// Read in input
let inputValues: Array<number> = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split(",")
  .map(Number);

var medianNum = median(inputValues);

var fuel = 0;
inputValues.forEach((x) => {
  fuel += Math.abs(x - medianNum);
});

console.log("Part 1 answer: ", fuel);
