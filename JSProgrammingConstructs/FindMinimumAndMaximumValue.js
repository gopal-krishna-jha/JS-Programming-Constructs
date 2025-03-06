//Creating a funtion for generating the Three digit Number Using REPL.
function getRandomNumber() {
  //Calling the floor and random method and return the value
  return Math.floor(Math.random() * 900 + 100);
}

//Creating a funtion to find the minimum value
function minimum(number) {
  //Creating a variable min to store the minimum value
  let min = number[0];

  //using for loop
  for (let value of number) {
    //Checking the conditon using if
    if (value < min) {
      min = value;
    }
  }

  //returning the minimum value
  return min;
}

//Creating a funtion for finding the maximum value
function maximum(number) {
  //Creating a variable max for storing the maximum value
  let max = number[0];

  //using the for loop
  for (let value of number) {
    //Checking the conditon using if
    if (value > max) {
      max = value;
    }
  }

  //return the maximum value
  return max;
}

//Creating an array of numbers
let number = [];
//Using for loop to store the random values
for (let i = 0; i < 5; i++) {
  //Storing the value and call the function getRandomNumber()
  number[i] = getRandomNumber();
}

//Printing the result.
console.log("Random 5 values: ", number);
console.log("Minimum value : ", minimum(number));
console.log("Maximum value : ", maximum(number));
