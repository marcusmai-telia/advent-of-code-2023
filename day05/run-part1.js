const { log } = require('console');
let fs = require('fs');
const lines = fs.readFileSync('./day05/input-e.txt', 'utf-8').split(/\r?\n/);

let value = 0;

//Function to return the values found i both arrays
function intersect(a, b) {
  var t;
  if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
  return a.filter(function (e) {
      return b.indexOf(e) > -1;
  });
};

//Function to remove value from array
function arrayRemove(arr, value) { 
  
  return arr.filter(function (geeks) { 
      return geeks != value; 
  }); 

};




console.log('Result: ' + value);