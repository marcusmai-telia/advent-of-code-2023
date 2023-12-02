const { log } = require('console');
let fs = require('fs');
const line = fs.readFileSync('./day02/input.txt', 'utf-8').split(/\r?\n/);

let value = 0;
let powerSum = 0;
const maxRed = 13; // 12 + 1
const maxGreen = 14; // 13 +1
const maxBlue = 15; // 14 + 1

// Check every game (line)
line.forEach((element) => {
	console.log('Input: ' + element);

	let minRed = 0;
	let minGreen = 0;
	let minBlue = 0;

	gamePossible = true;

	const game = element.split(':');
	const gameNumber = game[0].slice(5, game[0].length);

	let gameSets = [];

	//split up game in sets
	const sets = game[1].split(';');
	
	//split up sets in set
	sets.forEach(element => {
		let gameSet = [];
		const set = element.split(',');

		set.forEach(element => { 
			const set = element.trimStart().split(' ')
			gameSet.push(set);
			
			if (set[1] === 'red' && parseInt(set[0]) >= maxRed || set[1] === 'green' && parseInt(set[0]) >= maxGreen || set[1] === 'blue' && parseInt(set[0]) >= maxBlue) {
				gamePossible = false;
			}
			//count min per color
			if (set[1] === 'red' && parseInt(set[0]) > minRed) {
				// console.log('Current minRed: ' + minRed);
				// console.log('Current Value: ' + set[0]);
				minRed = set[0];
				// console.log('New minRed: ' + minRed);
			}
			if (set[1] === 'green' && parseInt(set[0]) > minGreen) {
				minGreen = set[0];
			}
			if (set[1] === 'blue' && parseInt(set[0]) > minBlue) {
				minBlue = set[0];
			}

		});
		gameSets.push(gameSet);
	});

	
	if (gamePossible) {
		value = value + parseInt(gameNumber);
	}
	// sum the powers
	console.log('Min for the game: Red: ' + minRed + ' Green: ' + minGreen + ' Blue: ' + minBlue);
	console.log('Power: ' + (minRed * minGreen * minBlue));
	powerSum = powerSum + (minBlue * minGreen * minRed);

});


console.log('Part 1: ' + value);
console.log('Part 2: ' + powerSum);

console.log('Max: Red: ' + maxRed + ' Green: ' + maxGreen + ' Blue: ' + maxBlue);
