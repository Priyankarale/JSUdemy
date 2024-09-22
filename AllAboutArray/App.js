//const arr=['a','b','c','d','e','f']
//SLICE// doest not mutated original array

// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,-2));
// console.log(arr.slice());
// console.log(...arr)

//splice//mutated original array

const arr2 = [1, 2, 3, 4, 5, 6];
// console.log(arr2.splice(-1))
// console.log(arr2.splice(1,2));
// console.log(arr2)

//Reverse //mutated original array
//const arr3=[2,4,6,8,10];
//console.log(arr3.reverse())
//console.log(arr3)

//concat //doest not mutated orogianl array
//const newArray=arr2.concat(arr3)
//console.log(newArray)

//Join()concatenating all of the elements in this array, separated by commas or a specified separator string//

/*for each */

// const movements = [200, 450, -400, 3000, -670];
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`movements ${i + 1},you deposied ${mov}`);
//   } else {
//     console.log(`movements ${i + 1} you withdrew ${Math.abs(mov)}`);
//   }
// });

// const eUrToUSD = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eUrToUSD;
// });

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const withdrew = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrew);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
