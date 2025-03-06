//Creating a function for returning the week day
function displayWeekDay(num) {
  //Creating an constant array to store the value
  const words = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  //Checking the condition that number is between 0-7
  if (num >0 && num <= 7) {
    //Returning the result
    return words[num-1];
  } else {
    //Returning the result
    return "Please enter Single Digit between 1-7";
  }
}

//Creating a variable and taking input from user
let number = prompt("Enter number of day.");

//Printing the result and calling the function
console.log(displayWeekDay(number));

