let fs = require('fs');
const lines = fs.readFileSync('./day01/input.txt', 'utf-8').split(/\r?\n/);

let value = 0;
let inputNumbers = [];

lines.forEach((element) => {
	let numbers = [];
	
	// console.log(element);

	//Loops through the line and adds numbers or named numbers
	for (let index = 0; index < element.length; index++) {
		const e = element[index];
		
		if (isNaN(e) === false) {
			numbers.push(e);
		}
		else { // zero, one, two, three, four, five, six, seven, eight, nine
			if (element.slice(index, index + 4) === 'zero') {
				numbers.push('0');
			}
			if (element.slice(index, index + 3) === 'one') {
				numbers.push('1');
			}
			if (element.slice(index, index + 3) === 'two') {
				numbers.push('2');
			}
			if (element.slice(index, index + 5) === 'three') {
				numbers.push('3');
			}
			if (element.slice(index, index + 4) === 'four') {
				numbers.push('4');
			}
			if (element.slice(index, index + 4) === 'five') {
				numbers.push('5');
			}
			if (element.slice(index, index + 3) === 'six') {
				numbers.push('6');
			}
			if (element.slice(index, index + 5) === 'seven') {
				numbers.push('7');
			}
			if (element.slice(index, index + 5) === 'eight') {
				numbers.push('8');
			}
			if (element.slice(index, index + 4) === 'nine') {
				numbers.push('9');
			}
		}
		
	}
	// console.log(numbers);
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

// console.log('Values: ' + inputNumbers);

console.log('Part 1: ' + value);
