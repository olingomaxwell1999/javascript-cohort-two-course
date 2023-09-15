// What is a number in JavaScript? - Numbers are a fundamental data type in JavaScript and are used extensively in web development. A number in JavaScript is a data type that represents a numeric value. Numbers can be either integers or floating-point numbers. Integers are whole numbers, such as 1, 2, 3, and so on. Floating-point numbers are numbers that have a decimal point, such as 1.5, 2.3, and so on.

//Numbers can be created using the following syntax::

let num = 1.3;
let num2 = 1.5;

console.log(num);
console.log(num2);

//The above will return the defined numbers ie 1 and 1.5

//Numbers can be manipulated using a variety of methods, including:

//toExponential() - converts a number to exponential notation. Exponential notation is an alternative method of expressing numbers.

console.log(num.toExponential());

//the above expression will return another way to show the value of mum ie "1e+0"

//toFixed() - converts a number to a specified number of decimal places.

console.log(num.toFixed());

//the above expression will return another way to show the value of mum ie "1.3"

//toLocaleString() - converts a number to a string in the current locale.

console.log(num.toLocaleString());

//toString() - converts a number to a string.

console.log(num.toString());

//valueOf() - returns the primitive value of a number.

console.log(num.valueOf());

//N/B
//more on numbers can be checked on the official documentation of javascript.
