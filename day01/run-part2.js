let fs = require('fs');
let input = fs.readFileSync('./day01/input-e2.txt', 'utf-8').split(/\r?\n/);

let value = 0;
let inputNumbers = [];

input.forEach((element) => {
	let numbers = [];
	
	console.log(element);
	// element = element.replace("one", "1")
	// element = element.replace("two", "2")
	// element = element.replace("three", "3")
	// element = element.replace("four", "4")
	// element = element.replace("five", "5")
	// element = element.replace("six", "6")
	// element = element.replace("seven", "7")
	// element = element.replace("eight", "8")
	// element = element.replace("nine", "9")
	console.log(element[0]);
	element[0].replace("t","A");
	console.log(element[0]);

	//Replace first word in this line
	for (let index = 0; index < element.length; index++) {
		// const e = element[index];

		// //one
		// if (element.slice(index, index + 3) === 'one') {
		// 	console.log('The value is: ' + element.slice(index, index + 3));
		// 	break;
		// }
		//two
		if (element.slice(index, index + 3) === 'two') {
			console.log('The value is: ' + element.slice(index, index + 3));
			element[0] = '2';
			console.log(element[index]);
			break;
		}

	}



	// Replace the last word in this line


	console.log(element);

	//Save only numbers
	for (let index = 0; index < element.length; index++) {
		const e = element[index];
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
