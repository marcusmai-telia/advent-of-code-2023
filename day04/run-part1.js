const { log } = require('console');
let fs = require('fs');
const lines = fs.readFileSync('./day04/input.txt', 'utf-8').split(/\r?\n/);

let totalPoints = 0;
let winCards = [];
let myCards = [];

//Function to return the values found i both arrays
function intersect(a, b) {
  var t;
  if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
  return a.filter(function (e) {
      return b.indexOf(e) > -1;
  });
}

//Function to remove value from array
function arrayRemove(arr, value) { 
  
  return arr.filter(function (geeks) { 
      return geeks != value; 
  }); 

} 

//Split up the input line into winning cards
lines.forEach((element) => {
  const a = element.split(':');
  const b = a[1].trim().split('|');
  const c0 = b[0].trim().split(' ');
  c0Filtered = arrayRemove(c0, '');
  
  // console.log(c0);
  // console.log(c0Filtered);
  // console.log('------------');
  winCards.push(c0Filtered);
});

//Split up the input line into my cards
lines.forEach((element) => {
  const a = element.split(':');
  const b = a[1].trim().split('|');
  let c1 = b[1].trim().split(' ');
  c1Filtered = arrayRemove(c1, '');

  // console.log(c1);
  // console.log(c1Filtered);
  // console.log('********');
  myCards.push(c1Filtered);
});

//Loop through the games and count points
for (let r = 0; r < lines.length; r++) {
  const winNo = winCards[r];
  const myNo = myCards[r];
  console.log('Winning: '+winNo);
  console.log('My Numbers: '+myNo);

  // Calculation of the score for card (row)
  myWinNo = intersect(winNo, myNo)
  console.log('Numbers found: ' + myWinNo);
  if (myWinNo.length === 1) {
    totalPoints += 1;
    console.log('Points: 1');
  }
  else if (myWinNo.length > 1) {
    totalPoints += 2 ** (myWinNo.length - 1);
    console.log('Points: ' + 2 ** (myWinNo.length - 1));
  }
  else {
    totalPoints += 0;
    console.log('Points: 0');
  }
  console.log('------------');
}

console.log('Part 1: ' + totalPoints);