// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//   [
//   'Neuer',
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lewandowski',
//   ],
//   [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
//   ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//   'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
//   }
//   };

//   /*1. Create one player array for each team (variables 'players1' and
// 'players2') */
//  //const[players1,players2]=[game.players[0],game.players[1]];
// const[players1,players2]=game.players;
// console.log("Player1",players1);
// console.log("Plyaer2",players2)
// //console.log(game.players)

// /*2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
//  */

// //const gk='Bayern Munich';
// const [gk,...fieldPlayers]=[players1];
// console.log("Remaing 10 Players",fieldPlayers)


// /*3.Create an array 'allPlayers' containing all players of both teams (22
// players) */
// const allPlayers=[...players1,...players2]
// console.log("all players",allPlayers)


// /*4.During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
//  */
// const players1Final=[...players1,'Thiago', 'Coutinho' ,'Perisic'];
// console.log("substitute players",players1Final)   /*correct */

// /*5.Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2') */
// const {team1,x:draw,team2}=game.odds
// console.log("****",team1,draw,team2)


// /*udemy solution
// const[odd:{team1,x:draw,team2}]=game
// */
// /*6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in) */


//  const  printGoals=function(...p_name){
//     console.log(`${p_name.length} goals were scored`)
//   }
//   printGoals('Davies', 'Muller', 'Lewandowski','Kimmich')
// printGoals('Thiago', 'Coutinho' ,'Perisic')
// printGoals(...game.scored)


// /*7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
//  */

// team1 <team2 && console.log("team one is more likely to win");
// team2 <team1 && console.log("team one is more likely to win")

// //Challenge
// /*. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski") */


// for(const goal of Object.keys(game.scored)){
  
// }

// for(const player of Object.values(game.scored)){
  
// }

// const entries=Object.entries(game.scored)
// console.log(entries)

// for(let [i,player] of entries){
//   //console.log(`Goal :${i} ${players}`)
// }
/*2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
 */



/*Coding Challenge 3
1. Create an array 'events' of the different game events that happened (no
duplicates)
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);
  const events=[...new Set(gameEvents.values()) ] //to convert this into an array just use spread operator and []
  console.log(events)

  /*After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
 */gameEvents.delete(64);
 console.log(gameEvents)

 /*3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes) */

console.log( `An event happened, on average, ${90/gameEvents.size} minutes`)


/*Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
 */


// for (let [min,event] of gameEvents){
//   const half=min<=45?'FIRST':"Second"
//   console.log(`${half} ${min}: ${event}`)
// }


document.body.append(document.createElement('textarea'));
const btn=document.body.append(document.createElement('button'));

document.querySelector('button').addEventListner("click me",function (){
  console.log("hi")
})

  





