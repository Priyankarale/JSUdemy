const restaurant = {
  name: "Priyanka",
  location: "July Solapur near bharati vidyapeth,solapur",
  categories: ["Indian Dish", "Italian", "Turkish dish"],
  starterMenu: ["MasalaPapad", "Panner65", "Kebap", "Hamsi"],
  MainCourse: ["Pizza", "PalakPanner", "Roti"],
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

// const [a,b,...others]=[1,2,3,4];
// console.log(a,b,others)


const [pizza,PalakPanner,...otherFood]=[...restaurant.MainCourse,...restaurant.starterMenu];
console.log(pizza,PalakPanner,...otherFood )