const { log } = require('console');
let fs = require('fs');
const line = fs.readFileSync('./day02/input.txt', 'utf-8').split(/\r?\n/);

let value = 0;
const maxRed = 13; // 12 + 1
const maxGreen = 14; // 13 +1
const maxBlue = 15; // 14 + 1

// Check every game (line)
line.forEach((element) => {
	console.log('Input: ' + element);

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
			
			// console.log(set);

			if (set[1] === 'red' && parseInt(set[0]) >= maxRed || set[1] === 'green' && parseInt(set[0]) >= maxGreen || set[1] === 'blue' && parseInt(set[0]) >= maxBlue) {
				
				console.log('Value:' + set[0]);
				console.log('Color:' + set[1]);
				console.log('Evaluate: ' + set[1] === 'green' && parseInt(set[0]) >= maxGreen);
				console.log('<----------------  Its above the max value');
				gamePossible = false;
			}



		});
		gameSets.push(gameSet);
	});

	//console.log(gameSets);

	console.log('====>  Game: ' + gameNumber + ' possible: ' + gamePossible);
	
	if (gamePossible) {
		value = value + parseInt(gameNumber);
	}

});


console.log('Part 1: ' + value);
console.log('Max: Red: ' + maxRed + ' Green: ' + maxGreen + ' Blue: ' + maxBlue);
