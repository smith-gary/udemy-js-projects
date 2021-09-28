'use strict';
/*
// String methods /////////////

const airline = 'TAP Air Portugal';
let plane = 'A320';

console.log(plane[0]);
console.log(airline.length);
console.log('B273'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal')); // case sensitive

console.log(airline.slice(4)); // substring, does not change underlying string
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // +1 is to get rid of space before portugal

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E')
    console.log('You got the middle seat...waa waa...');
  else console.log('You got lucky no middle seat');
};

checkMiddleSeat('11B');
checkMiddleSeat('22C');
checkMiddleSeat('22E');
// boxing, converts string to box which makes it an object which allows methods to be used

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name ///////
const passenger = 'gARy';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const fixPassengerName = function (name) {
  const passenger = name;
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};
console.log(fixPassengerName('gARy'));

// comparing emails ////////

const email = 'hello@gary.io';
const loginEmail = '  hello@Gary.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);
console.log(email === normalEmail);

// replacing ///////////

const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

// regular expression
console.log(announcement.replace(/door/g, 'gate'));

// booleans /////////////
plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.endsWith('neo'));
console.log(plane.startsWith('A') && plane.endsWith('o'));

// practice ///////////////
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('No entry');
  } else {
    console.log('welcome aboard!');
  }
};
checkBaggage('laPtop, food, knife');
checkBaggage('socks, camera');
checkBaggage('Gun, snacks');

// split & join //////////////
console.log('a+very+nice+string'.split('+'));
console.log('gary smith'.split(' '));

const [firstName, lastName] = 'gary smith'.split(' ');
const newName = ['mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capName('jessica ann smith davis');
capName('gary daniel smith');

// padding a string /////////////
const message = 'go to gate 23';
console.log(message.padStart(25, '+'));
console.log(message.padEnd(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(3455443886995));
console.log(maskCreditCard('3847394839078349073'));

// repeat //////////////////
const message2 = 'bad weather...all departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(2);
*/

/* Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['mon', 'tues', 'wed', 'thurs', 'fri'];
const openingHours = {
  [weekDays[3]]: {
    // using array for day of the week
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
  // ES6 method doesn't need function keyword
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:20',
    address,
  }) {
    console.log(
      `Order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}!`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
*/

/*
// looping objects /////////////////

// property Names ////////
const properties = Object.keys(openingHours);
console.log(properties);
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

let openStr = `we are open ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// property Values /////////
const values = Object.values(openingHours);
console.log(values);

// entire object /////////////
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
// optional chaining /////////////////

console.log(restaurant.openingHours.mon?.open); // returns undefined if undefined or null instead of error
console.log(restaurant.openingHours?.mon?.open); // multi optional chaining

// example  /////////////////
const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}.`);
}

// optional chaining w/methods ////////
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// optional chaining w/arrays ////////
const users = [{ name: 'gary', email: 'gary@hello.com' }];
console.log(users[0]?.name ?? 'user does not exist');
*/

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

/*
// Looping arrays: ////////////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for of loop /////////////////
for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);
*/

/*
// Nullish Coalescing Operator ?? //////////////

//restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 23;
console.log(guest2);

// nullish: null and undefined (NOT 0 or '')

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
// short circuiting with && and || /////////
// 1. can use any data type
// 2. return any data type
// 3. short circuiting

// || or (will return the first truthy value it comes to) //////////////

console.log(3 || 'gary');
console.log('' || 'gary');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || null);

// restaurant.numGuests = 21;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guest2 = restaurant.numGuests || 23;
console.log(guest2);

// && AND (will return the first falsey value it comes to, if no falsey will return last value) /////////////////

console.log(0 && 'gary');
console.log(3 && 'gary');
console.log('' && 'gary');
console.log(true && 0);
console.log(undefined && null);
console.log(undefined && 0 && '' && 'hello' && null);

// example
if (restaurant.orderPizza) {
    restaurant.orderPizza('shrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('shrooms', 'meat');
*/

/*
// rest operator: on left side of = //////////
// rest should always be last element, and can only be one
const [a, b, ...others] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// rest w/ objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// rest w/function
const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
}
add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 87];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'meat');
*/

// spread operator: right side of = ////////////////////
/*
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

// copy array /////////////////////////
const mainMenuCopy = [...restaurant.mainMenu];

// join 2+ arrays /////////////////////
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables are: arrays, strings, maps, sets, NOT objects
const str = 'gary';
const letters = [...str, '', 's'];
console.log(letters);
console.log(...str);
// can't use template literal because it does not expect multi values separated by a comma.
// multiple values separated by a comma only work in functions and arrays. (prior to es 18)

// real world example ////////////////////
const ingredients = [
    // prompt(`Let\'s make pasta! Ingredient 1?`),
    // prompt('ingredient 2?'),
    // prompt('ingredient 3?')
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// objects w/spread operator ///////////////////////////
const newRestaurant = {...restaurant, founder: 'guiseppe', foundIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = {...restaurant };
restaurant.name = 'something new';
console.log(newRestaurant.name);
console.log(restaurant.name);
*/

// destructuring objects ////////////////
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// setting default values //////////////

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables ////////////////////

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 34 };
({ a, b } = obj);
console.log(a, b);

// nested objects ////////////////

const { fri: { open, close } } = openingHours;
console.log(open, close);
*/

// destructuring arrays ///////////////////
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //[] on left side of = js knows to destructure
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
*/

// switching variables ///////////////////
/*
 const temp = main;
 main = secondary;
 secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

//recieve 2 return values from a function ////

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
*/

// nested destructuring ////////////////
/*
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values ///////////////////////

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// sets //////////////////////////
/* const ordersSet = new Set([
    'pasta',
    'pizza',
    'pizza',
    'rissoto',
    'pizza',
])
console.log(ordersSet);

console.log(new Set('bob'));

 console.log(ordersSet.size);
 console.log(ordersSet.has('pizza'));
 ordersSet.add('garlic bread');
 ordersSet.delete('rissoto');
 console.log(ordersSet);
//  ordersSet.clear();
 console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//  example ///////////
const staff = ['waiter', 'chef', 'waiter', 'chef', 'manager'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
*/

// maps can have any value stored as key /////
/*
const rest = new Map();
rest.set('name', 'classico italiano');
rest.set(1, 'firenze, italy');
console.log(rest.set(2, 'lisbon, protugal'));
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'we are open')
    .set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(1));
const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear;
rest.set([1, 2], 'test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);
console.log(rest.get([1, 2])); // undefined, have to declare array as a variable to call it
*/

// quiz //////////////////////////////
/*
const question = new Map([
    ['question', 'what is the best language?'],
    [1, 'C'],
    [2, 'java'],
    [3, 'JS'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'try again'],
]);
console.log(question);

// convert object to map//////////
const hoursMap = new Map(Object.entries(restaurant.openingHours));

console.log(hoursMap);

// question ///////////////////////////
console.log(question.get('question'));

for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer?'));
console.log(answer);

// my answer ////////////////////////
if (answer === question.get('correct')) {
    console.log(question.get(true));
} else {
    console.log(question.get(false));
}

//course answer (using booleans in map instead of if/else) ////////////////
console.log(question.get(question.get('correct') === answer));
*/

// convert map to array ///////////////////
/*
console.log([...question]);
//console.log([question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/
