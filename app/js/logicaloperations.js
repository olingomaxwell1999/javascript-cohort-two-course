//What are logical operators? - These operators perform logical operations on one or more operands. Examples include the logical AND (&&) operator, the logical OR (||) operator, and the logical NOT (!) operator.

//&& (logical and) - Returns true if both operands are true, else returns false. ie

let x = 5;

let y = 10;

let z = 15;

console.log(x > 0 && y > 0);

//the above statement will return true

//OR (logical or) - Returns true if either of the operands is true, else returns false. ie

console.log(x > 0 || y > 0);

//the above statement will return true

//! (logical not) - Returns the inverse of the operand, i.e. returns false if operand is true, and vice versa.

console.log(!(x === y));

//the above statement will return true

//?? (nullish coalescing) - Returns the first operand if it's not null or undefined, otherwise returns the second operand.

console.log(x ?? y);

//the above statement will return 5 whith is the value of the first one

//? : (ternary operator) - Conditionally returns one value or another based on a condition.

console.log(x ? y : z);

//the above statement will return 10 since x is truthy (non-zero), the value of y (10) will be logged.
