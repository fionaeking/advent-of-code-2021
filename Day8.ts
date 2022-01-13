import * as fs from "fs";

// Read in input
let inputValues: Array<string> = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n");

var sum = 0;
inputValues.forEach((row) => {
  row
    .split("|")[1]
    .trim()
    .split(/\s+/)
    .forEach((digitOut) => {
      sum += +[2, 3, 4, 7].includes(digitOut.length);
    });
});

console.log("Part 1 answer:", sum);
