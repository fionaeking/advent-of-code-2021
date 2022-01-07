import * as fs from "fs";

// Read in input
let inputValues: Array<string> = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n\n");

// Remove first element of array, representing the numbers drawn
var numbersToDraw = inputValues.shift()?.split(',').map(Number);

// Parse input into bingo boards
var bingoBoards: number[][][] = [];
inputValues.forEach(
  x => {
    var tempArray: number[][] = [];
    x.split('\n').map(s => s.trim())
      .forEach(x => {
        tempArray.push(x.split(/\s+/).map(Number));
    });
    bingoBoards.push(tempArray);
    }
);


let checker = (arr: string | any[], target: any[]) => target.every((v: any) => arr.includes(v));

var winningBoard : number[][] = [];
var numbersDrawn: number [] = [];
while (winningBoard.length == 0)
{
  var newNumber  = numbersToDraw?.shift();
  if (newNumber) numbersDrawn.push(newNumber);
  bingoBoards.forEach(
    bingoBoard => {
      // Test rows
      bingoBoard.forEach(row => {if (checker(numbersDrawn, row))
        {
          console.log("Bingo!");
          winningBoard = bingoBoard;
        }});
      // Test columns
      for (var i = 0; i< bingoBoard.length; i++)
      {
        if (checker(numbersDrawn, bingoBoard.map(function (x) {
          return (x[i]);
        })))
        {
          console.log("Bingo!");
          winningBoard = bingoBoard;
        }
      }
    });
}

var sum = 0;
winningBoard.flat().forEach(x => {
  if (!numbersDrawn.includes(x)) sum += x;
})
var lastNumDrawn = numbersDrawn.pop();
if (lastNumDrawn) console.log("Part 1 answer:", sum * lastNumDrawn);



