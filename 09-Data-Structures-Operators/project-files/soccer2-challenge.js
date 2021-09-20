'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const scorers = {
  players: ['Gnarby', 'Hummels', 'Lewandowski'],
};

// 1. My answer
const whoScored = [...game.scored];

for (const [goal, players] of whoScored.entries()) {
  console.log(`Goal ${goal + 1}: ${players}`);
}

// 1. course answer
for (const [i, player] of game.scored.entries())
  console.log(`goal ${i + 1}: ${player}`);

// 2. my answer
const allOdds = Object.values(game.odds);
console.log(allOdds);
const sumOdds = allOdds.reduce((a, b) => a + b, 0);
const avgOdds = sumOdds / allOdds.length || 0;
console.log(`The average odds of the game is ${avgOdds}.`);

// 2. course answer
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3. my answer
const teamOdds = Object.entries(game.odds);
console.log(teamOdds);
for (const [team, oddsOfWin] of teamOdds) {
  console.log(`Odds of victory ${team}: ${oddsOfWin}`);
}

// 3. course answer
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

/*
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console,but in a nice formatted way, exactly like this:
	Odd of victory Bayern Munich: 1.33 
	Odd of draw: 3.25
	Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

4. Bonus:Create an object called' scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
}
*/
