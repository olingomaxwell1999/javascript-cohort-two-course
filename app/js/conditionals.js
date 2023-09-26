//What are conditionals? - onditionals in JavaScript allow you to execute different code blocks based on certain conditions. The main conditional statements in JavaScript are:

//if statement - Executes a code block if the condition is true. ie -

let nums = ["max", "leo", "tarick"];

if (nums[1] === "max") {
  console.log("max");
}

//the above statement will return "max" because the condition provided has been met. if the condition could not have been met, if wont run hence they are uporten with the nect conditional.

//else statement - Executes a code block if the condition is false. Usually used with an if statement. ie -

if (nums[1] === "max") {
  console.log("max");
} else {
  console.log(nums[1]);
}

//the above statement will return "leo" because the condition provided has not been met.

//else if statement - Allows multiple conditions to be checked. Falls through to the next condition if the previous condition is false. ie -

if (nums[1] === "max") {
  console.log("max");
} else if (nums[0] === "max") {
  console.log("max");
} else {
  console.log(nums[1]);
}

//the above statement will return "max" because the condition provided in the else if statement has been met.

//switch statement - Checks a value against multiple case clauses. The first matching case is executed. ie -

switch (nums[1]) {
  case "max":
    console.log("max");
    break;

  case "leo":
    console.log("leo");
    break;

  default:
    console.log(nums[1]);
    break;
}

//the above statement will return "leo" because the condition provided in the switch statement(case "leo") has been met

//N/B - Conditions are evaluated as either true or false. Code executes conditionally based on the condition results.

//Conditions Helps control program flow based on runtime values and logic and thus they are fundamental to writing dynamic JavaScript code that can make decisions and execute different paths.
