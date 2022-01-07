import * as fs from "fs";

// Read in input
let inputValues: Array<number> = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n")
  .map(Number);

console.log(
  "Part 1 answer:",
  inputValues.filter((_rowValue, i) => inputValues[i + 1] > inputValues[i])
    .length
);
console.log(
  "Part 2 answer:",
  inputValues.filter((_rowValue, i) => inputValues[i + 3] > inputValues[i])
    .length
);
