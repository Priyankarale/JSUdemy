let bookings=[];

const createBooking=(flightNum,numPassenger,price=199)=>
{
  const booking={
    flightNum,
    numPassenger,
    price
  }
  console.log(booking);
  bookings.push(booking)
}
createBooking("1ss")
createBooking("1ES",2,120)
