import * as fs from "fs";

// Read in input
let inputValues: Array<string> = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n");

var riskLevel = 0;
inputValues.forEach((x, xi) => {
  const chars = [...x].map(Number);
  chars.forEach((y, yi) => {
    var left = yi - 1 >= 0 ? chars[yi - 1] : Number.MAX_SAFE_INTEGER;
    var right =
      yi + 1 <= chars.length - 1 ? chars[yi + 1] : Number.MAX_SAFE_INTEGER;
    var up =
      xi - 1 >= 0
        ? [...inputValues[xi - 1]].map(Number)[yi]
        : Number.MAX_SAFE_INTEGER;
    var down =
      xi + 1 <= inputValues.length - 1
        ? [...inputValues[xi + 1]].map(Number)[yi]
        : Number.MAX_SAFE_INTEGER;

    if (y < left && y < right && y < up && y < down) riskLevel += 1 + y;
  });
});

console.log("Part 1 answer:", riskLevel);
