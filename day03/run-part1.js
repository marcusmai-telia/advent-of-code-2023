const { log } = require('console');
let fs = require('fs');
const lines = fs.readFileSync('./day03/input.txt', 'utf-8').split(/\r?\n/);

let sumNumbers = 0;
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

//Check if input is a symbol
function isSymbol(c) {
  if (isNaN(c) && c !== '.' && c !== undefined) {
    // console.log('---->Its a symbol');
    return true;
  }
  else {
    return false;
  }
}

// Find if there is a adjacent symbol
function adjacentSymbol(r, c) {
  // Run only if it's not 0
  if (r !==0) {
    // Check North West
    // console.log(grid[r - 1][c - 1]);
    if (isSymbol(grid[r - 1][c - 1])) {
      return true;
    }
    // Check North
    // console.log(grid[r - 1][c]);
    if (isSymbol(grid[r - 1][c])) {
      return true;
    }
    // Check North East
    // console.log(grid[r - 1][c + 1]);
    if (isSymbol(grid[r - 1][c + 1])) {
      return true;
    }
  }
  if (r !== grid.length-1) {
    // Check South East
    // console.log(grid[r + 1][c + 1]);
    if (isSymbol(grid[r + 1][c + 1])) {
      return true;
    }
    // Check South
    // console.log(grid[r + 1][c]);
    if (isSymbol(grid[r + 1][c])) {
      return true;
    }
    // Check South West
    // console.log(grid[r + 1][c - 1]);
    if (isSymbol(grid[r + 1][c - 1])) {
      return true;
    }
  }
  // Check East
  // console.log(grid[r][c + 1]);
  if (isSymbol(grid[r][c + 1])) {
    return true;
  }
  // Check West
  // console.log(grid[r][c - 1]);
  if (isSymbol(grid[r][c - 1])) {
    return true;
  }

  return false;
}


// Step through the grid
for (let r = 0; r < grid.length; r++) {
  const row = grid[r];
  let number = '';
  let numberAdjacentSymbol = false;

  for (let c = 0; c < row.length; c++) {
    
    // IF number save it and check if it's to be used (adjacent with symbol)
    if (!isNaN(grid[r][c])) {
      number += grid[r][c];
      if (adjacentSymbol(r, c)) {
        numberAdjacentSymbol = true;
      }
    }
    else { // Else convert to number and save it / reset
      if (number !== '') {
        if (numberAdjacentSymbol) {
          sumNumbers += parseInt(number);
        }
        //Reset
        number = '';
        numberAdjacentSymbol = false;
      }
    }
    // IF it's the last on the line, then end and reset like above
    if (c === grid.length-1) {
      if (number !== '') {
        if (numberAdjacentSymbol) {
          sumNumbers += parseInt(number);
        }
        //Reset
        number = '';
        numberAdjacentSymbol = false;
      }
    }

  }
}


console.log('Part 1: ' + sumNumbers);