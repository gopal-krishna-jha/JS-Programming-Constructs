//Create a function to simulate a coin flip and return the resultF
function coinFlip() { 
  //Create a variable to store the random value 0 or 1
  let num = Math.random().toFixed();
  console.log(num)
  //Checking the conditon
  if (num == 0) {
    //Returning the result
    return "Heads";
  } else {
    //Returning the result
    return "Tails";
  }
}

//Calling the function and print the result
console.log(coinFlip());
