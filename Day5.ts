import * as fs from "fs";

// Read in input
let inputValues: Array<string> = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n");

var coords : string[] = [];
inputValues.forEach(
  x => {
    var pairCoords = x.split(' -> ');
    var x1 = Number(pairCoords[0].split(',')[0]);
    var x2 = Number(pairCoords[1].split(',')[0]);
    var y1 = Number(pairCoords[0].split(',')[1]);
    var y2 = Number(pairCoords[1].split(',')[1]);
    var xmin = Math.min(x1, x2);
    var xmax = Math.max(x1, x2);
    var ymin = Math.min(y1, y2);
    var ymax = Math.max(y1, y2);
    if (x1 == x2)
    {
      for (var i = ymin; i<=ymax; i++)
        {
          coords.push(`${x1},${i}`);
        }
    } 
    else if (y1 == y2)
    {
      for (var i = xmin; i<=xmax; i++)
        {
          coords.push(`${i},${y1}`);
        }
    }
    else 
    {
      for (var i = 0; i<=(xmax-xmin); i++)
      {
        coords.push(`${(x1 < x2) ? x1+i : x1-i},${(y1 < y2) ? y1+i : y1-i}`);
      }
    }
  }
);

// TODO this is the slow bit - needs optimising
console.log([...new Set(
  coords.filter((value, index, self) => self.indexOf(value) !== index))].length
);