function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("year:",currentDate.getYear())
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  function calculatesum(){
    let sum=0;
    for(let i=0;i<10000000;i++){
      sum=sum+i;
    }
    return sum;
  }
  const beforedate=new Date();
  const beforedateinms=beforedate.getTime();
  
  calculatesum();
  
  const afterdate=new Date();
  const afterdateinms=afterdate.getTime();
  // console.log(afterdateinms-beforedateinms)

  

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();



////*************REPLIT */

const currentDate= new Date();
// console.log(currentDate.getDate());
// console.log(currentDate.getFullYear());

console.log("time in milliseconds since 1970:", currentDate.getTime());
// epoch timestamp
// console.log(currentDate.getMilliseconds());


function calculatesum(){
  let sum=0;
  for(let i=0;i<10000000;i++){
    sum=sum+i;
  }
  return sum;
}
const beforedate=new Date();
const beforedateinms=beforedate.getTime();

calculatesum();

const afterdate=new Date();
const afterdateinms=afterdate.getTime();
// console.log(afterdateinms-beforedateinms)


function currenttimeprint(){
  // console.log(new Date().getTime());
}
// setInterval(currenttimeprint,1000)

