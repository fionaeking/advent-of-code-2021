import * as fs from "fs";

// Read in input
let inputValues: Array<number> = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n")
  .map(Number);

// Part 1
var part1Increases = 0;
inputValues.forEach(
  (_rowValue, index) => {
    if (inputValues[index+1] > inputValues[index]) {part1Increases++;}
  }
);
console.log("Part 1 answer:", part1Increases);

// Part 2
var part2Increases = 0;
inputValues.forEach(
  (_rowValue, index) => {
    if (inputValues.slice(index+1, index+4).reduce((sum, current) => sum + current, 0) > (inputValues.slice(index, index+3).reduce((sum, current) => sum + current, 0))) {part2Increases++;}
  }
);
console.log("Part 2 answer:", part2Increases);