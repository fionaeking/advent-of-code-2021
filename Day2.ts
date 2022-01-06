import * as fs from "fs";

// Read in input
let inputValues: Array<string> = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n");

// TODO v quick and not efficient - tidy up!

var x = 0;
var y = 0;
var aim = 0;

inputValues.forEach( instruction => {
  var array = instruction.split(" ");
  var value = Number(array[1]);
  switch (array[0])
  {
    case 'forward':
      x += value;
      y += aim * value;
      break;
    case 'down':
      // y += value;
      aim += value;
      break;
    case 'up':
      // y -= value;
      aim -= value;
      break;
    default:
      break;
  }
})
console.log(x * y);

