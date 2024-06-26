const restaurant={
    name:'Priyanka',
    location:"July Solapur near bharati vidyapeth,solapur",
    categories:['Indian Dish','Italian','Turkish dish'],
    starterMenu:['Masala Papad','Panner 65','Kebap','Hamsi'],
    MainCourse:['Pizza','Palak Panner','Roti']  ,
    openingHours:{
      thu:{
       open:12,
       close:12
      },
      fri:{
        open:11,
        close:23,
      },
      sat:{
        open:0,
        close:24
      }
    }
  }
  const{open,close}=restaurant.openingHours;
  console.log(open,close)