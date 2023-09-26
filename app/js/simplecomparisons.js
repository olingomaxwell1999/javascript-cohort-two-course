//In this case, we are going to look at equality

//we are going to meet signs like == === != !== < > <= >=

// == - this checs for value alone and not types. it is not strict ie

let num1 = 1;

let num2 = "1";

let num3 = 1;

console.log(num1 == num2);

console.log(num1 == num3);

//all the above statements will return true yet num2 is a string

// === - this checks for value and types. I is very strict.

console.log(num1 === num2);

console.log(num1 === num3);

//the first statement will return false because the second value is a string and not a number. the second statement will return true since num1 and num3 are numbers.

// != - this checks for value alone and not types. it is not strict ie

console.log(num1 != num2);

console.log(num1 != num3);

//all the above statements will return false

// !== - this checks for value and types. I is very strict.

console.log(num1 !== num2);

console.log(num1 !== num3);

//the first statement will return true because the second value is a string and not a number. the second statement will return false since num1 and num3 are numbers

//< - this checks whether a value is less in reference to another value. ie-

let num4 = 2;

let num5 = 1;

console.log(num4 < num5);

//the above statement will return false because 2 is greater than one and not less than

//> - this checks whether a value is greater in reference to another value. ie-

console.log(num4 > num5);

//the above statement will return true because 2 is greater than one

//<= - this checks whether a value is less than or equal to another value. ie-

console.log(num4 <= num5);

//the above statement will return false because 2 is greater than one and not equal to one

//>= - this checks whether a value is greater than or equal to another value. ie-

console.log(num4 >= num5);

//the above statement will return true because 2 is greater than one and not equal to one

//for more on simple operations, check out the javascript MDN docs for more details.
