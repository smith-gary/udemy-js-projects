'use strict';

/*
// default parameters
const bookings = [];
const creatBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 + numPassengers
) {

    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 1.99;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
};

creatBooking('LH123');
creatBooking('LH123', 2, 800);
creatBooking('lh123', 2);
creatBooking('lh123', 5);

// Skipping default parameter
creatBooking('lh123', undefined, 1000);
*/

/*
// Arguments into functions
const flight = 'LH123';
const gary = {
    name: 'Gary Smith',
    passport: 23455677
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    // Manipulating the passenger object is the same as manipulating the gary object.

    if (passenger.passport === 23455677) {
        alert('Check in');
    } else {
        alert('Wrong passport');
    }
}

checkIn(flight, gary);
console.log(flight);
console.log(gary);

// FlightNum did not change flight because it is only a copy and not the original variable.
// Copying reference to memory...same as doing...
// This is why name updated buy flight number didn't,
// Passing a primitive type to a function it is just a copy
// Passing a object to a function is a copy but it will make changes to both original and copy.
// const flightNum = flight;
// const passenger = gary;

// Two functions interacting with the same object
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(gary);
checkIn(flight, gary);

// Passing by value and passing by reference
// JS doesn't have passing by reference
// Passing by reference is passing a reference to any value instead of the value itself even with primitives.
// JS passes the memory address, it is still a value and not a reference.
*/

/*
// First class and higher order functions
// First class = first class citizens (values)
// Functions are just another 'type' of object(value)
// Functions can be stored in variables or properties
// Functions can be passed as arguments to OTHER functions
// Functions can return functions FROM other functions
// Functions can call methods on functions

// Higher order functions (addEventListener) receive another function as an argument, that returns a new function, or both. this is due to first class functions.
// Function passed in is called a callback function.
// First class function is a feature meaning it is a value. Higher order functions are in practice, meaning that language supports first class functions.

// Abstraction
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('javascript is the best', upperFirstWord); // upperFirstWord = call back function
transformer('javascript is the best', oneWord); // oneWord = call back function

// JS uses callbacks all the time
const highFive = function () {
    console.log('👋🏿');
};
document.body.addEventListener('click', highFive); // highFive = call back function

['Gary', 'Bob', 'Tim'].forEach(highFive);
*/

/*
// Functions returning functions
const greet = function(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('hey');
greeterHey('gary');
greeterHey('steven');

greet('Hello')('Gary');

// Arrow functions returning arrow functions
const greet2 = greeting2 => name2 => console.log(`${greeting2} ${name2}`);
const greeterHello = greet2('Hello');
greeterHello('Gary');
greeterHello('Steven');

greet2('Hello')('Gary');
*/

/*
const luft = {
    airline: 'Luft',
    iataCode: 'LN',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
        },

};

luft.book(239, 'Gary');
luft.book(635, 'John');
console.log(luft);

const euro = {
    airline: 'Euro',
    iataCode: 'EW',
    bookings: [],
};

const book = luft.book;

// does not work due to this being a function now, and not a method within the above object. this key word defaults to undefined.
// book(23, 'Sara');

// call method for the this keyword and functions.
book.call(euro, 23, 'sara');
console.log(euro);
book.call(luft, 43, 'Kevin');
console.log(luft);

// Apply Method: does not recieve list of arguments. Takes an array of arguments.
// Apply isn't used that often anymore.
const flightData = [583, 'george'];
book.apply(euro, flightData);
console.log(euro);

// Spread operator used instead of apply method.
book.call(euro, ...flightData);

// Bind method, lets manually set the this keyword. doesn't immediately call the function.
// book.call(euro, 23, 'Sarah');
const bookEW = book.bind(euro); // does not call book function. makes new function
const bookLuft = book.bind(luft);
bookLuft(43, 'bob');
bookEW(23, 'Steve');

const bookEW23 = book.bind(euro, 23); // partial application
bookEW23('sean');

// objects with eventlisteners
luft.planes = 300;
luft.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
// luft.buyPlane();
// the this keyword is pointing to the button vs the object. Thats why the result is NaN.
document.querySelector('.buy').addEventListener('click', luft.buyPlane.bind(luft)); // using bind to tell this to bind to the luft object instead of the button element.

// Partial application w/ bind

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));
console.log(addVat(23));

// const addTax2 = function (rate) {
//     return function (value) {
//         return value + value * rate;
//     };
// };
const addTax2 = (rate) => (value) => value + value * rate;

const addVat2 = addTax2(0.23);
console.log(addVat2(100));
console.log(addVat2(23));
*/

// Challenge poll app
/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option.
  The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array.
  For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
  Make sure to check if the input is a number and if the number makes sense
  (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results.
The method takes a string as an input (called 'type'), which can be either 'string' or 'array'.
If type is 'array', simply display the results array as it is, using console.log().
This should be the default option. If type is 'string', display a string like
"Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data.
Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object!
So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀



const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        //get answer
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`
        )
        );
        console.log(answer);

        // register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },

};

// poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]}, 'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');
*/

// IIFE ///////////
/*
(function () {
    console.log('normal IIFE')
})();

(() => console.log('arrow IIFE'))();
*/

// CLOSURE /////////////