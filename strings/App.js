/*Get last n characters of string
Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
 */


function myFunction(str) {
  return str.slice(-3);
}
console.log(myFunction('Priyanka'))


/*Get first n characters of string
Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result
 */

function getFirstThree(str){
  return str.slice(0,3)
}
console.log(getFirstThree("Priyanka"))

/*Find the position of one string in another
Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.*/

function getIndex(str){
  return str.indexOf('is')
}
console.log(getIndex("javascriptis"))

/*Extract first half of string
Write a function that takes a string (a) as argument. Extract the first half a. Return the result
 */

function firstHalf(str){
  return str.slice(0,str.length/2);
}
console.log(firstHalf('priyanka'));











