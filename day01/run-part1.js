let fs = require('fs');
const input = fs.readFileSync('./day01/input.txt', 'utf-8').split(/\r?\n/);

let value = 0;
let inputNumbers = [];

input.forEach((element) => {
	let numbers = [];
	
	//console.log(element);

	//Save only numbers
	for (let index = 0; index < element.length; index++) {
		const e = element[index];
		//Save value if it's a number
		if (isNaN(e) === false) {
			numbers.push(e);
		}
		
	}
	//console.log(numbers);
	if (numbers.length > 1) {
		const currentNumber = numbers[0] + numbers[numbers.length - 1];
		inputNumbers.push(numbers[0] + numbers[numbers.length - 1]);
		value = value + +currentNumber;
	}
	else {
		const currentNumber = numbers[0] + numbers[0];
		inputNumbers.push(numbers[0] + numbers[0]);
		value = value + +currentNumber;
	}
});

console.log('Values: ' + inputNumbers);

console.log('Part 1: ' + value);
