import * as fs from "fs";

export enum Direction {
  Forward = "forward",
  Down = "down",
  Up = "up",
}

// Read in input
let inputValues: Array<string> = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n");

// TODO v quick and not efficient - tidy up!

var x = 0;
var y = 0;
var aim = 0;

inputValues.forEach((instruction) => {
  var array = instruction.split(" ");
  var direction = array[0];
  var value = Number(array[1]);
  switch (direction) {
    case Direction.Forward:
      x += value;
      y += aim * value;
      break;
    case Direction.Down:
      // y += value;
      aim += value;
      break;
    case Direction.Up:
      // y -= value;
      aim -= value;
      break;
    default:
      break;
  }
});
console.log("Answer: ", x * y);
