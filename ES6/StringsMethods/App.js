const airline ="Tap air portigul";
const plane='A320'
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

console.log(plane[0]);
console.log(plane[1]);


console.log(airline.length)
console.log('13737'.length)
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('portigul'))
console.log(airline.slice(4));
console.log(airline.slice(4,7))
const checkMiddle=function(seat){
  const s=seat.slice(-1)
  if(s==='B' || s==='E'){
    console.log('You got the middle seat')
  }
  else{
    console.log('You got lucky')
  }
}

checkMiddle('12B')
checkMiddle('22S')
checkMiddle('111')
console.log(new String('Jonas'))



const passenger_correct=(passenger_Name)=>{
const passenger=passenger_Name.toLowerCase();
console.log(passenger);
const correctPassengerName=`${passenger[0].toUpperCase()}${passenger.toLowerCase().slice(1)} `
console.log(correctPassengerName);
}
passenger_correct('joNas')



///compariosn of email
const correct_email="hello@jonas.com@gmail.com  "
const checkEmail=(loginEmail)=>{
  const normalizedEmail=loginEmail.toLowerCase().trim(); 
  console.log(loginEmail===correct_email)
}
checkEmail("HellO@JONAS.COM\n")


// const email= 'hello@jonas.com';
// const loginEmail= ' HellO@JONAS.COM\n';

// const normalizedEmail=loginEmail.toLowerCase().trim();
// console.log(normalizedEmail)
// console.log(normalizedEmail===email)






















// const passenger='JoNAs';
// const passengerLower=passenger.toLowerCase();
// const passengerCorrect=passengerLower[0].toUpperCase()+passengerLower.slice(1);
// console.log(passengerCorrect)

// const email=


