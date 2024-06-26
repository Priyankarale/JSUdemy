/*Spread operator is used to spread or expand the iterable like an array or string into individual elements */

const restaurant = {
  name: "Priyanka",
  location: "July Solapur near bharati vidyapeth,solapur",
  categories: ["Indian Dish", "Italian", "Turkish dish"],
  starterMenu: ["Masala Papad", "Panner 65", "Kebap", "Hamsi"],
  MainCourse: ["Pizza", "Palak Panner", "Roti"],
  openingHours: {
    thu: {
      open: 12,
      close: 12,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderFood: function (Tomato, Onion) {
    console.log(`Here is your masala papa with ${Tomato} and ${Onion}`);
  },
};
//const menu=[...restaurant.starterMenu,...restaurant.MainCourse];
//console.log(menu)

//Iterables array

// const str="Jonas";
// const  letter=[...str,"",'s'];
// console.log(str)
// console.log(letter)

// const ingredients = [
//   prompt("lets 's make masala papad ingredients 1?"),
//   prompt("ingredient 2"),
// ];
//restaurant.orderFood(...ingredients);

//In ES 2018 Spread Operator also work on Objects//


const newRestaurant={...restaurant,founderName:"Priyanka Karale",foundedYear:2024}
console.log("**",newRestaurant)
