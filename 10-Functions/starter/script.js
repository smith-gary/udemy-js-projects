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


