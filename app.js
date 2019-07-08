// Функции высшего порядка

// Exsercise 1

function firstFunc(arr, secondFunc) {
	let res = [];

	for (let i = 0; i < arr.length; i++) {
		res.push(secondFunc(arr[i]));
	}

	return res;
}

function handler1(el) {
	if (!el) return el;

	return el[0].toUpperCase() + el.slice(1);
}

function handler2(el) {
	if (!el) {
		return el;
	} else {
		return (el *= 10);
	}
}

function handler3(el) {
	return (el = el.name + ' is ' + el.age);
}

function handler4(el) {
	return el.split('').reverse().join('');
}

let question = firstFunc([ 'my', 'name', 'is', 'Trinity' ], handler1);
question = question.join('');

let numbers = firstFunc([ 10, 20, 30 ], handler2);
numbers = numbers.join(' ');

let users = firstFunc([ { age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' } ], handler3);
users = users.join(', ');

let reverse = firstFunc([ 'abc', '123' ], handler4);
reverse = reverse.join(', ');

// console.log('New value: ', question);
// console.log('New value: ', numbers);
// console.log('New value: ', users);
// console.log('New value: ', reverse);

// Exsercise 2
// Variant 1

function every(array, cb) {
	if (!Array.isArray(array)) return [];

	if (cb instanceof Function) {
		alert(array.every(cb));
	}
}

function cd(number) {
	return number > 5;
}

let result = every([ 6, 7, 8, 9, 10 ], cd);
// console.log(number);

// Variant 2

function analogEvery(array, cb) {
	if (!Array.isArray(array)) return [];

	if (cb instanceof Function) {
		for (let i = 0; i <= array.length - 1; i++) {
			cb(array[i], i, array);
		}
	}
}

function cb(element, index, array) {
	if (element > barrier && res != false) {
		res = true;
	} else {
		res = false;
	}
}

const barrier = 5;
let res;
analogEvery([ 5, 7, 8, 9, 10 ], cb);
console.log(res);

// Деструктурируюшее присваивание
// Exsercise 1

function restructur() {
	let first = name1;
	let second = rest;
	return {
		first: first,
		second: second
	};
}

const [ name1, ...rest ] = [ 'Marina', 'b', 'c', 'd', 'e', 'f' ];
restructur();

// Exsercise 2

function getInfo() {
	if (name === '') {
		console.log('Underfined');
	} else {
		console.log('Name: ', name);
		console.log('Partners: ', partners[0], partners[1]);
	}
}

const organisation = {
	name: 'Google',
	info: { employees: [ 'Vlad', 'Olga' ], partners: [ 'Microsoft', 'Facebook', 'Xing' ] }
};

const { name, info: { employees, partners } } = organisation;
getInfo();

// Функции стрелки
// Exsercise 1

const sum = () => {
	const params = other;
	if (!params.length) return 0;

	return params.reduce((prev, next) => prev + next);
};

const [ ...other ] = [ 3, 3, 3, 3 ];
sum();
console.log(sum());
