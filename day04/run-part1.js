const { log } = require('console');
let fs = require('fs');
const lines = fs.readFileSync('./day03/input.txt', 'utf-8').split(/\r?\n/);

let value = 0;
let grid = [];

//Create array grid
lines.forEach((element) => {
  grid.push(element.split(''));
});

//Print grid
// for (let i = 0; i < grid.length; i++) {
//   const element = grid[i];
//   console.log(element);
// }



console.log('Part 1: ' + value);