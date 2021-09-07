'use strict';

/*
function calcAge(birthYear) {
	const age = 2037 - birthYear;
	// console.log(firstName);

	function printAge() {
		const output = `${firstName} You are ${age}, born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			// var is function scoped, not block scoped
			var millenial = true;
			const firstName = 'Jonas';
			const str = `Oh, and you're a millenial, ${firstName}.`;
			console.log(str);

			function add(a, b) {
				return a + b;
			}
		}
		console.log(millenial);
		// add(2, 3); can only be used outside of strict mode
	}
	printAge();

	return age;
}

const firstName = 'Gary';
calcAge(1989);
*/

/*
// hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'gary';
let job = 'mil';
const year = 1989;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 4));
// console.log(addArrow(2, 5));

function addDecl(a, b) {
	return a + b;
}

var addExpr = function(a, b) {
	return a + b;
};

const addArrow = (a, b) => a + b;

//example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
	console.log('All products deleted.');
}

var x = 1;
let y = 2;
const t = 4;
*/

/*
- This keyword points to the owner of the function
- not static, only assigned when function  of a method is called

- Method: this = <Object that is calling the method>
- Simple function cell: this = undefined
- Arrow functions: this = <this of surrunding function (lexical this)>
- Event listner: this = <DOM element that the handler is attached to>
*/

/*

const gary = function(birthYear) {
	console.log(2037 - birthYear);
	console.log(this);
	//This in regular function is undefined
}

gary(1989);

const garyArrow = birthYear => {
	console.log(2037 - birthYear);
	console.log(this);
	//arrow uses this of parent scope(lexical)
};

gary(1989);
*/

// const gary = {
//     year: 1989,
//     garyFunc: function(birthYear) {
//         console.log(this);
//         console.log(2037 - this.year);
//     },
// };
// gary.garyFunc();

// const matilda = {
//     year: 2017,
// };

// matilda.garyFunc = gary.garyFunc;
// matilda.garyFunc();

// const f = gary.garyFunc;
// f();

const gary = {
    firstName: 'gary',
    year: 1989,
    calcAge: function() {
        //console.log(this);
        console.log(2037 - this.year);

        //solution 1

        // const self = this;
        // /*
        //  self or that to allow this keyword to go up the scope chain
        //  */
        // const isMilenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);

        //solution 2	

        // arrow function inherits from calcAge function
        const isMilenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMilenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
gary.greet();
gary.calcAge();

//arguments keyword
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 6);
//arrow function doesn't get the arguments keyword

//primitives vs objects (primitive vs reference type)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'gary',
    age: 32,
};
const friend = me;
friend.age = 27;
console.log('friend', friend);
console.log('me', me);

//primitive types

let lastName = 'williams';
let oldLastName = lastName;
lastName = 'davis';
console.log(lastName, oldLastName);

//reference types

const jessica = {
    firstName: 'jessica',
    lastName: 'williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log(jessica);
console.log(marriedJessica);
//marriedJessica = (); // cant work due to const

//copying objects

const jessica2 = {
    firstName: 'jessica',
    lastName: 'williams',
    age: 27,
    family: ['alice', 'bob'],
};

//object.assign = shallow copy
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('marry');
console.log(jessica2);
console.log(jessicaCopy);