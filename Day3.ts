import * as fs from "fs";

// Read in input
let inputValues: Array<string> = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n");

// Part 1
function binary_to_decimal(decimal: number): number {
  return Math.pow(2, decimal);
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

  if (sum * 2 >= inputValues.length) {
    gammaRate += binary_to_decimal(numberLength - 1 - i);
  } else {
    epsilonRate += binary_to_decimal(numberLength - 1 - i);
  }
}
console.log("Part 1 answer:", gammaRate * epsilonRate);

function apply_bit_criteria(
  inputArray: string[],
  i: number,
  most_common_value: boolean
) {
  var sumO2 = inputArray
    .map(function (x) {
      return Number(x[i]);
    })
    .reduce(function (x, y) {
      return x + y;
    }, 0);
  return sumO2 * 2 >= inputArray.length
    ? inputArray.filter((value) => value[i] == (most_common_value ? "1" : "0"))
    : inputArray.filter((value) => value[i] == (most_common_value ? "0" : "1"));
}

var clonedInputValues = [...inputValues];
for (var i = 0; i < numberLength; i++) {
  if (inputValues.length > 1)
    inputValues = apply_bit_criteria(inputValues, i, true);
  if (clonedInputValues.length > 1)
    clonedInputValues = apply_bit_criteria(clonedInputValues, i, false);
}
console.log(
  "Part 2 answer:",
  parseInt(inputValues[0], 2) * parseInt(clonedInputValues[0], 2)
);
