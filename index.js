"use strict";
const weekdays = [];
const odds = {
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds,
  teja(st, en) {
    console.log("tejesh");
  },
};

console.log(game?.team2);
// const [menu, menu2] = game.players;
// for (const [i, ele] of menu.entries()) {
//   console.log(`${i + 1}:${ele}`);
// }
// //1.
// const [player1, players2] = game.players;

// console.log(player1, players2);
// //2.
// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...player1, ...players2];
// console.log(allPlayers);
// //4.

// const finalPlayers = [...player1, "Thiago", "coutine", "perisc"];

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6.

// const printGoals = function (...goals) {
//   console.log(`${goals.length} goals was scored`);
// };
// printGoals("davis", "muller", "lewandoski", "kimmich");
// printGoals("davis", "muller");
// printGoals(...game.scored);

// //7.
// team1 < team2 && console.log("team1 is most likely to win");
// team1 > team2 && console.log("team2 is most likely to win");
