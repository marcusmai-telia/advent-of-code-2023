const { log } = require('console');
let fs = require('fs');
const lines = fs.readFileSync('./day04/input.txt', 'utf-8').split(/\r?\n/);

let totalPoints = 0;
let winCards = [];
let myCards = [];
let cards = [];
let totaltScoreCards = 0;

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
  // console.log('Winning: '+winNo);
  // console.log('My Numbers: '+myNo);

  // Calculation of the score for card (row)
  myWinNo = intersect(winNo, myNo)
  // console.log('Numbers found: ' + myWinNo);
  if (myWinNo.length === 1) {
    totalPoints += 1;
    // console.log('Points: 1');
    cards.push([1, 1]);
  }
  else if (myWinNo.length > 1) {
    totalPoints += 2 ** (myWinNo.length - 1);
    // console.log('Points: ' + 2 ** (myWinNo.length - 1));
    cards.push([1, myWinNo.length]);
  }
  else {
    totalPoints += 0;
    // console.log('Points: 0');
    cards.push([1, 0]);
  }
  // console.log('------------');
}

//Print the cards, rounds and copies
// cards.forEach(element => {
//   console.log(element);
// });
// console.log('----------------');

// Every card type 1 / 2 / 3
for (let l = 0;  l < cards.length; l++) {

  // console.log(cards[l]);
  const card = cards[l];
  
  const rounds = cards[l][0];
  const copies = cards[l][1];

  // console.log(rounds);
  // console.log(copies);

  // Run the amount of rounds
  for (let r = 0; r < rounds; r++) {

    //Copy the amout of copies down
    for (let c = 0; c < copies; c++) {

      cards[l + 1 + c][0] += 1;
    }

  }
  
};

//Print the cards, rounds and copies
// console.log('----------------');
// cards.forEach(element => {
//   console.log(element);
// });
// console.log('----------------');

cards.forEach(element => {
  totaltScoreCards += parseInt(element[0]);
});

console.log('Part 1: ' + totaltScoreCards);














// // Card 1: 8 points
// const winNo = [41, 48, 83, 86, 17];
// const myNo = [83, 86, 6, 31, 17, 9, 48, 53];

// // Card 2: 2 points
// // const winNo = [13, 32, 20, 16, 61];
// // const myNo = [61, 30, 68, 82, 17, 32, 24, 19];

// // Card 4: 1 points
// // const winNo = [41, 92, 73, 84, 69];
// // const myNo = [59, 84, 76, 51, 58,  5, 54, 83];

// // Card 5: 0 points
// // const winNo = [87, 83, 26, 28, 32];
// // const myNo = [88, 30, 70, 12, 93, 22, 82, 36];

// // Calculation of the score for card (row)
// myWinNo = intersect(winNo, myNo)
// if (myWinNo.length === 1) {
//   points = 1;
// }
// else if (myWinNo.length > 1) {
//   points = 2 ** (myWinNo.length - 1);
// }
// else {
//   points = 0;
// }