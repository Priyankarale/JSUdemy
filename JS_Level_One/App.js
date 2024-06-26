/*creating a variable */
// let first_name="Priyaka";
// console.log(first_name);
// first_name="Piu"
// console.log(first_name);

/*ReDeclare value to a variable* */
/*let num =1;
let num=2;
console.log(num);*/ //here we will get an error i.e Identifier 'num' has already been declared

//we will fix it here //
// let num=1;
// num =2;
// console.log(num)
//  ///if we are using let keyword to declare our varible we can resign the value but we cant redecalre it

//********Create variables with const************//

// const value=5;
// console.log(value);

/*****can not assign a new value to a variable that was created with const */
// const number=5;
// number=2;
// console.log(number) ///TypeError///

// const num1=5;
// num1=6;
// console.log(num1)

// Boolean Values///
// let isOnSale=0;
// console.log(isOnSale);
// if(isOnSale){
//   console.log("sale is live");
// }
// else
// {
//   console.log("sale has been finised")
// }

///******functions *****/
// function logMessage(){
//   console.log("function is calling");
// }
// logMessage();

// const logMsg=function(){
//   console.log("This is called function expression")
// }
// logMsg();

///function returns value////

// function returnValue(){
//   const num=5;
//   return num;
// }
// const result=returnValue();
// console.log(result)
/*In this exercise, we create a function func. Then, we call func and assign its return value to the variable result.
When you run the code like this, you see that the value undefined is logged. This is the current return value of func because we do not explicitly define a return value ourselves.
Let func return the value of the variable text.
*/

// function func1() {
//   return "javascript function";
// }
// const result = func1();
// console.log(result);

/*In this exercise func declares a variable text with the value hello. Then it returns the value of text. After that, it assigns a new value hello world to the variable text and returns the new value.
But, when you run the code, you see that only the initial value of text (hello) is logged.
Adjust the code so that the final value of text is logged.
*/
// function func() {
//   let msg = "hello";
//   msg = "hello world";
//   return msg;
// }
// const res=func();
// console.log(res)

fun();
//console.log(result2())
function fun(){
   console.log("function decalrataion")
}
// fun();
const result2=function(){
  console.log("function expression")
}
// console.log(result2())


/*Functions - parameters and arguments (1)
In the code below, we define a function multiply that has a parameter called num. The function returns num multiplied by itself.
Adjust the code below such that the console.log() statement logs true.
 */

function multiply(num){
return num*num;
}
console.log(multiply(5))

/* */


