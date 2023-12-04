const { log } = require('console');
let fs = require('fs');
const { start } = require('repl');
const lines = fs.readFileSync('./day03/input.txt', 'utf-8').split(/\r?\n/);

let sumNumbers = 0;
let starNumbers = [];
let tempStarPos = '';
let sumStars = 0;
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

    // If it's a * den reply it is a gear = true else false
    if (c === '*') {
      return true;
    };
    return false;
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
      tempStarPos = (r - 1).toString() + '-' + (c - 1).toString();
      return true;
    }
    // Check North
    // console.log(grid[r - 1][c]);
    if (isSymbol(grid[r - 1][c])) {
      tempStarPos = (r - 1).toString() + '-' + (c).toString();
      return true;
    }
    // Check North East
    // console.log(grid[r - 1][c + 1]);
    if (isSymbol(grid[r - 1][c + 1])) {
      tempStarPos = (r - 1).toString() + '-' + (c + 1).toString();
      return true;
    }
  }
  if (r !== grid.length-1) {
    // Check South East
    // console.log(grid[r + 1][c + 1]);
    if (isSymbol(grid[r + 1][c + 1])) {
      tempStarPos = (r + 1).toString() + '-' + (c + 1).toString();
      // console.log((r + 1).toString() + (c + 1).toString());
      // console.log(tempStarPos);

      return true;
    }
    // Check South
    // console.log(grid[r + 1][c]);
    if (isSymbol(grid[r + 1][c])) {
      tempStarPos = (r + 1).toString() + '-' + (c).toString();
      return true;
    }
    // Check South West
    // console.log(grid[r + 1][c - 1]);
    if (isSymbol(grid[r + 1][c - 1])) {
      tempStarPos = (r + 1).toString() + '-' + (c - 1).toString();
      return true;
    }
  }
  // Check East
  // console.log(grid[r][c + 1]);
  if (isSymbol(grid[r][c + 1])) {
    tempStarPos = (r).toString() + '-' + (c + 1).toString();
    return true;
  }
  // Check West
  // console.log(grid[r][c - 1]);
  if (isSymbol(grid[r][c - 1])) {
    tempStarPos = (r).toString() + '-' + (c - 1).toString();
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
          console.log(tempStarPos);
          sumNumbers += parseInt(number);
          starNumbers.push([number, tempStarPos]);
        }
        //Reset
        number = '';
        tempStarPos = '';
        numberAdjacentSymbol = false;
      }
    }
    // IF it's the last on the line, then end and reset like above
    if (c === grid.length-1) {
      if (number !== '') {
        if (numberAdjacentSymbol) {
          console.log(number);
          sumNumbers += parseInt(number);
          starNumbers.push([number, tempStarPos]);
        }
        //Reset
        number = '';
        tempStarPos = '';
        numberAdjacentSymbol = false;
      }
    }

  }
}


console.log('----------------');

//console.log(starNumbers);

//Next step is to go through the starsNumbers list and multiply the ones with the same star.

for (let i = 0; i < starNumbers.length; i++) {
  // const element = starNumbers[i];

  // console.log(starNumbers[i]);
  // console.log(starNumbers[i][0]);
  // console.log(starNumbers[i][1]);

  for (let y = i+1; y < starNumbers.length; y++) {
    
    // console.log(starNumbers[y]);

    if (starNumbers[i][1] === starNumbers[y][1]) {
      // console.log('---> Hit!');
      // console.log(starNumbers[i][0]);
      // console.log(starNumbers[i][1]);
      // console.log(starNumbers[y][0]);
      // console.log(starNumbers[y][1]);
      // console.log('---> END');

      let gearCal = parseInt(starNumbers[i][0]) * parseInt(starNumbers[y][0]);
      //console.log(gearCal);
      //sumNumbers = sumNumbers + gearCal;
      sumStars += + parseInt(gearCal);
      gearCal = 0;

    }
  }
  
}


console.log('Part 1: ' + sumStars);




/// Two errors.... i'm not looking for more then one star per number, could be OK.
// I don't add mulit togehter??