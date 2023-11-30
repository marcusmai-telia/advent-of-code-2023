let fs = require('fs');
let input = fs.readFileSync('./day01/input.txt', 'utf-8').split(/\r?\n/);

let myScore = 0;

input.forEach((element) => {
	//Calculate the outcome result of the game
	//Draw
	if (element === 'A X' || element === 'B Y' || element === 'C Z') {
		myScore += 3;
	}
	//Win
	if (element === 'C X' || element === 'B Z' || element === 'A Y') {
		myScore += 6;
	}

	//Calculate the score for figure choice
	switch (element[2]) {
		case 'X':
			myScore += 1;
			break;
		case 'Y':
			myScore += 2;
			break;
		case 'Z':
			myScore += 3;
			break;
		default:
			break;
	}
});

console.log('Part 1: ' + myScore);
