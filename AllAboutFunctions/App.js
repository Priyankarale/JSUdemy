// let bookings=[];

// const createBooking=(flightNum,numPassenger,price=199)=>
// {
//   const booking={
//     flightNum,
//     numPassenger,
//     price
//   }
//   console.log(booking);
//   bookings.push(booking)
// }
// createBooking("1ss")
// createBooking("1ES",2,120)


/*How Passing aruguments works value vs/refernces*/

// const flight='LH234';
// const passenger_details={
//   name:'Priyanka',
//   password:12345
// }

// const checkIn=function(flight,passenger_details){

//   if(passenger_details.password===12345){
//     alert("check In")
//   }
//   else
//   {
//     alert("wrong password")
//   }
// }
// checkIn(flight,passenger_details)
// console.log(flight,passenger_details)

// const newPassword=function(person){
//   person.password=Math.trunc(Math.random()*10000)
// }
// newPassword(passenger_details)

// checkIn(flight,passenger_details)


/*firts class and higher order  function*/

// const add=(a,b)=>a+b;

// const counter={
//   value:23,
//   inc:function(){
//     this.value++
//   }
// }


// const greet=()=>console.log("Hey Priyanaka");
// btn.addEventListner("click",greet)///HOF

///function accepting callback functio//
// const oneWord=function(str){
// return str.replace(/ /g,'').toLowerCase()
// }
// const upperWordd=function(str){
//   const[first,...other]=str.split("");
//   return[first.toUpperCase(),...other].join('')
// }

// const transformer=function(str,fn){
// console.log(`original string ${str}`);
// console.log(`Transformed string :${fn(str)}`)
// }
// transformer('javascript is the best',upperWordd)
// transformer('javascript is the best',oneWord)


/*function return function */

// const greet=function(greeting){
//   console.log(greeting)
//   return function (name){
//     console.log(`${greeting} ${name}`)
//   }
// }
// const greetingHey=greet('hey');
// greetingHey("Priyanka") 


/*call ,apply,bind */


// const IndoAirline={
//   airline:"indo",
//   iatacode:545,
//   booking:[],
//   book(flightNum,name)
//   {
//      console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode} ${flightNum}`);
//      this.booking.push({flight:`${this.iatacode} ${flightNum} ,${name}`})
//   }
// }
// IndoAirline.book(235,"piu");

// const AirIndiaExpress={
//   airline:"air india express",
//   iatacode:444,
//   booking:[]
// }
//const book=IndoAirline.book;
//console.log(book);
//book(23,"piu")  this will give undefined

// book.call(AirIndiaExpress,23,"piu")
// book.app
// apply(AirIndiaExpress,[45,"Jonas"])

















