//Creating a function for checking the data is between march and june
function isDateBetweenMarchAndJune(month, day) {
  //Checking the condition and returning the result
  if (
    (month >= 3 && month <= 6) ||
    (month === 3 && day >= 20) ||
    (month === 6 && day <= 20)
  ) {
    //Return true when if statement executes
    return true;
    // } else if (month === 3 && day >= 20) {
    //   //Return true
    //   return true;
    // } else if (month === 6 && day <= 20) {
    //   //Return true
    //   return true;
    // }

    //Return false if condition doesn't match
    
  }return false;  
}
//Create a variable to store day
let day = parseInt(process.argv[2]);
//Create a variable to store day
let month = parseInt(process.argv[3]);

//Call the function and print the result
console.log(
  `day ${day} and month ${month} is between 20 march to 20 june :  ${isDateBetweenMarchAndJune(
    month,
    day
  )}`
);
