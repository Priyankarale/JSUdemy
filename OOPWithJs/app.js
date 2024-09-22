// // const account = {
// //   owener: "Jonas",
// //   movements: [150, 200, 300, 450],
// //   get latest() {
// //     console.log(this.movements.slice(-1).pop());
// //   },
// //   set latest(mov) {
// //     this.movements.push(mov);
// //   },
// // };
// // account.latest;
// // account.latest = 100;
// // console.log(account.movements);

// // const PersonCl = {
// //   calAge() {
// //     console.log(2037 - this.birthYear);
// //   },
// // };
// // const steven = Object.create(PersonCl);
// // console.log(steven);
// // steven.name = "steven";
// // steven.birthYear = 1996;
// // steven.calAge();

// // class Car {
// //   constructor(name, speed) {
// //     this.name = name;
// //     this.speed = speed;
// //   }
// //   get speedUS() {
// //     return this.speed / 1.6;
// //   }
// //   set speedUS(speed) {
// //     this.speed = speed * 1.6;
// //   }
// // }
// // const ford = new Car("Ford", 120);
// // console.log(ford.speedUS);
// // ford.speedUS = 50;
// // console.log(ford);

// // //Inheritance between classes ,constrctor and funtions

// // const Person = function (firstname, birthYear) {
// //   this.firstname = firstname;
// //   this.birthYear = birthYear;
// // };

// // Person.prototype.calAge = function () {
// //   console.log(2037 - this.birthYear);
// // };

// // const Student = function (firstname, birthYear, course) {
// //   this.firstname = firstname;
// //   this.birthYear = birthYear;
// //   this.course = course;
// // };
// // Student.prototype.introduce = function () {
// //   console.log(`My name is ${this.firstname} and I study ${this.course}`);
// // };

// // const mike = new Student("mike", 2003, "computer science");
// // mike.introduce();

// // const EV = function (make, speed, charge) {
// //   this.make = make;
// //   this.speed = speed;
// //   this.charge = charge;
// // };

// // EV.prototype.chargeBattery = function (chargeTo) {
// //   this.chargeTo = chargeTo;
// // };

// // EV.prototype.accelerate = function (speed) {
// //   this.speed = speed + 20;
// //   this.speed = speed - 1;
// // };

// class Account {
//   //public fields

//   local = navigator.language;
//   //Private field
//   #movements = [];
//   #pin;
//   constructor(name, currency, pin) {
//     this.name = name;
//     this.currency = currency;
//     this.#pin = pin;
//     // this._movements = [];
//     // this.local = navigator.language;
//     console.log(`Thanks for opening an account${name}`);
//   }
//   deposit(val) {
//     this.#movements.push(val);
//   }
//   withdrew(val) {
//     this.#movements.push(-val);
//   }
//   //Private methods
//   //#approved()
//   _approved() {
//     return true;
//   }
//   loanRequest(val) {
//     //if (this.#approved) private methods are not available in google chrome
//     if (this._approved) {
//       console.log(`Loan Approved`);
//     }
//   }
// }
// const acc1 = new Account("Jonas", "INR", 1111);
// acc1.deposit(200);
// acc1.withdrew(100);
// acc1.loanRequest(1000);
// console.log(acc1);
// //console.log(acc1.#pin);
// //console.log(acc1.#approved);

const names = ["Rohit", "Sahil", "Ruchika", "Deepa"];
const newDev = names.map(function (name, index, array) {
  array[index] = name + "DEV";
  return name + "DEV";
});
console.log(newDev, "newDev with for each");
console.log(names);
