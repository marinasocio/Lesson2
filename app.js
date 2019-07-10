// Функции высшего порядка

// Exsercise 1

function firstFunc(arr, secondFunc) {
	res = [];

	for (let i = 0; i < arr.length; i++) {
		res.push(secondFunc(arr[i]));
	}

	return answer = res.join(', ');
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

let res;
let answer;
let question = firstFunc([ 'my', 'name', 'is', 'Trinity' ], handler1);
console.log('New value: ', question.replace(/, /gi, ''));
let numer = firstFunc([ 10, 20, 30 ], handler2);
console.log('New value: ', numer.replace(/,/gi, ''));
let users = firstFunc([ { age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' } ], handler3);
console.log('New value: ', users);
let reverse = firstFunc([ 'abc', '123' ], handler4);
console.log('New value: ', reverse);


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
	if (element > barrier && resu != false) {
		resu = true;
	} else {
		resu = false;
	}
}

const barrier = 5;
let resu;
analogEvery([ 5, 7, 8, 9, 10 ], cb);
console.log(resu);

// Деструктурируюшее присваивание
// Exsercise 1

function restructur([ element1, ...rest ]) {
	let first = element1;
	let second = rest;
	return {
		first,
		second
	};
}

console.log(restructur([ 'Marina', 'b', 'c', 'd', 'e', 'f' ]));

// Exsercise 2

function getInfo() {
	if (!brand || brand === '') {
		console.log('Underfined');
	} else {
		console.log('Name: ', brand);
		console.log('Partners: ', partners[0], partners[1]);
	}
}

const organisation = {
	name: 'Google',
	info: { employees: [ 'Vlad', 'Olga' ], partners: [ 'Microsoft', 'Facebook', 'Xing' ] }
};

const { name: brand, info: { employees, partners } } = organisation;
getInfo();


// Функции стрелки
// Exsercise 1

const sum = (...other) => {
		params = other;
	if (!params.length) return 0;

	return params.reduce((prev, next) => prev + next);
};

let params;
console.log(sum(1, 2, 3));

