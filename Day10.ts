import * as fs from "fs";

export interface CharCount {
  ch: string;
  points: number;
}

var points = 0;
var starts = ["[", "(", "{", "<"];
var endsPoints: Array<CharCount> = [
  { ch: "]", points: 57 },
  { ch: ")", points: 3 },
  { ch: "}", points: 1197 },
  { ch: ">", points: 25137 },
];

fs.readFileSync("input.txt", "utf8")
  .toString()
  .split("\n")
  .forEach((s) => {
    var unmatchedStarts: Array<string> = [];
    for (let b of s.split("")) {
      if (starts.includes(b)) unmatchedStarts.push(b);
      else {
        if (
          unmatchedStarts[unmatchedStarts.length - 1] !=
          starts[endsPoints.map((x) => x.ch).indexOf(b)]
        ) {
          var charPoints = endsPoints.find((x) => x.ch == b)?.points;
          if (charPoints) points += charPoints;
          break;
        }
        unmatchedStarts.pop();
      }
    }
  });

console.log("Part 1 answer:", points);
