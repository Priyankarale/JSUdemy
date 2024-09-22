// const Julia=[3, 5, 2, 12, 7];
// const Kate= [4, 1, 15, 8, 3]

// const checkDogs=(Julia,Kate)=>{
//   const JuliaModifiedData=Julia.slice(1,-2);
//   const newData=[...JuliaModifiedData,...Kate];
//    newData.forEach(function(value,index){
//      if(value>3){
//      console.log(`"Dog number ${index+1}is an adult, and is ${value}years old`)
//      }
//      else{
//       console.log(`"Dog number ${index} is still a puppy`)
//      }
//    })

// }

// checkDogs(Julia,Kate)

// const calcAverageHumanAge=(age)=>{
//   let humanAge;
//  if(age<=2){
//     humanAge = 2 * dogAge
//  }
//  if(age>=2)
//   {
//     humanAge=16 + dogAge *

//   }
// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
function isEmptyObject(...value) {
  if (value == null) {
    // null or undefined
    return console.log("false");
  }

  // if (typeof value !== "object") {
  //   // boolean, number, string, function, etc.
  //   return console.log("false");
  // }

  const proto = Object.getPrototypeOf(value);

  // consider `Object.create(null)`, commonly used as a safe map
  // before `Map` support, an empty object as well as `{}`
  if (proto !== null && proto !== Object.prototype) {
    return console.log("false");
  }

  return isEmpty(value);
}
isEmptyObject(5);

isEmptyObject({ x: 5, y: 42 });
