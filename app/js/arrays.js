//What is an array? - An array is a data structure that stores a collection of elements of the same type. In JavaScript, arrays are zero-indexed, meaning that the first element in an array is at index 0.

// Arrays can be created using the following syntax:

const array = ["element1", "element2", "elementN"];

// arrays can contain all the javascript datatypes like for instance, you can have an array containing strings like below:

const arrayStr = ["string1", "string2", "string3"];

// arrays can also contain other arrays like below:

const array2 = [
  [1, 2, 3],
  [4, 5, 6],
];

//arrays can contain objects

const array3 = [
  { key1: "value1", key2: "value2" },
  { key1: "value1", key2: "value2" },
];

//arrays can also contain numbers

const array4 = [1, 2, 3, 4, 5];

//and also we can have an array containing mixed datatypes like below

const array5 = ["string1", 1, true, { key1: "value1", key2: "value2" }];

//Arrays can also be created using the `Array()` constructor. The following code creates an empty array:

const array6 = Array();

//to access elements that are within an array, we use bracket notation as shown below

const array7 = ["string1", "string2", "string3"];

console.log(array7[0]);

//from the above statement, we shall see the first element of the array being shown on the console log. This is because arrays are zero index based meaning the first element is always accessed with 0.

//N/B - Just a joke if your girlfriend or boyfriend tells you that on his or her array of things you are number 1 just know you are the the second😂😂😂😂😒

//arrays can be modified using the same method as shown below

const array8 = ["string1", "string2", "string3"];

array8[0] = "new string";

console.log(array8);

//the above will add the string to the array at the first place since we have used index 0

//the new array will have "new string"

//arrays can be manipulated with following methods:

//1.push() - This method adds an element to the end of an array.

const array9 = ["string1", "string2", "string3"];

array9.push("string4");

console.log(array9);

//the above statement will add the string4 to the end of the array

//2.pop() - This method removes the last element from an array.

const array10 = ["string1", "string2", "string3"];

array10.pop();

console.log(array10);

//the above statement will remove the last element from the array

//3.shift() - This method removes the first element from an array.

const array11 = ["string1", "string2", "string3"];

array11.shift();

console.log(array11);

//the above statement will remove the first element from the array

//4.unshift() - This method adds an element to the beginning of an array.

const array12 = ["string1", "string2", "string3"];

array12.unshift("string4");

console.log(array12);

//the above statement will add the string4 to the beginning of the array

//5.splice() - This method removes and/or adds elements to an array.

const array13 = ["string1", "string2", "string3"];

array13.splice(1, 1, "string4");

console.log(array13);

//6.forEach() - Calls a function for each element in the array.

const array14 = ["string1", "string2", "string3"];

array14.forEach((element) => {
  console.log(element);
});

//the above statement will log all the elements individually

//7.reverse() - Reverses the order of the array.

const array15 = ["string1", "string2", "string3"];

array15.reverse();

console.log(array15);

//the above statement will reverse the order the first element will be "string3"

//join() - Joins the elements of the array into a string.

const array16 = ["string1", "string2", "string3"];

console.log(array16.join(""));

//the above statement will join the elements of the array into a string

//slice() - Creates a new array by extracting a portion of the original array.

const array17 = ["string1", "string2", "string3"];

console.log(array17.slice(1, 2));

//the above statement will create a new array from the second element to the third

//keys() - Returns an iterator of keys for each element in the array

const array18 = ["string1", "string2", "string3"];

console.log(Object.keys(array18));

//the above statement will return an iterator of keys for each element

//values() - Returns an iterator of values for each element in the array

const array19 = ["string1", "string2", "string3"];

console.log(Object.values(array19));

//the above statement will return an iterator of values for each element

//entries() - Returns an iterator of key-value pairs for each element in the array.

const array20 = ["string1", "string2", "string3"];

console.log(Object.entries(array20));

//the above statement will return an iterator of key-value pairs for each element

//copyWithin() - Copies a portion of the array to another portion of the array.

const array21 = ["string1", "string2", "string3"];

console.log(array21.copyWithin(1, 0, 2));

//the above statement will copy a portion of the array to another portion of the array

//fill() - Fills the array with a static value.

const array22 = ["string1", "string2", "string3"];

array22.fill("string4");

console.log(array22);

//the above statement will fill the array with the string

//findIndex() - Returns the index of the first element in the array that satisfies a condition.

const array23 = ["string1", "string2", "string3"];

console.log(array23.findIndex((element) => element === "string2"));

//the above statement will return the index of the first element in the array that satisfies a condition

//find() - Returns the first element in the array that satisfies a condition.

const array24 = ["string1", "string2", "string3"];

console.log(array24.find((element) => element === "string2"));

//the above statement will return the first element in the array that satisfies a condition

//some() - Returns true if any element in the array satisfies a condition.

const array25 = ["string1", "string2", "string3"];

console.log(array25.some((element) => element === "string2"));

//the above statement will return true if any element in the array satisfies a condition

//every() - Returns true if all elements in the array satisfy a condition.

const array26 = ["string1", "string2", "string3"];

console.log(array26.every((element) => element === "string2"));

//the above statement will return true if all elements in the array satisfy

//indexOf() - Returns the index of the first element in the array that satisfies a condition.

const array27 = ["string1", "string2", "string3"];

console.log(array27.indexOf("string2"));

//the above statement will return the index of the first element in the array that satisfies a condition

//includes() - Returns true if the array contains an element.

const array28 = ["string1", "string2", "string3"];

console.log(array28.includes("string2"));

//the above statement will return true if the array contains an element

//concat() - Concatenates two or more arrays.

const array29 = ["string1", "string2", "string3"];

const array30 = ["string4", "string5", "string6"];

console.log(array29.concat(array30));

//the above statement will concatenate two or more arrays

//sor() - Sorts the array in ascending order.

const array31 = ["string1", "string2", "string3"];

array31.sort();

console.log(array31);

//the above statement will sort the array in ascending order

//reduce() - Reduces the array to a single value by applying a function to each element.

const array32 = [1, 2, 3];

console.log(
  array32.reduce((accumulator, currentValue) => accumulator + currentValue)
);

//the above statement will reduce the array to a single value

//filter() - method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. Here are some key details about how it works:

//It accepts a callback function as its argument. This callback is executed on each element in the calling array.The callback function accepts three arguments - the current element, index, and array being traversed. The callback should return a boolean - true if the element passes the test and should be included in the result array, false if not. filter() returns a new array containing all elements that passed the test implemented by the callback. It does not modify the original array.

const array33 = [1, 2, 3, 4, 5];

console.log(array33.filter((element) => element % 2 === 0));

//the above statement will filter the array

//map() - Creates a new array by applying a function to each element in the array.

const array34 = [1, 2, 3, 4, 5];

console.log(array34.map((element) => element * 2));

//the above statement will create a new array and the new array will have the initial values of the array multiplied by 2

//N/B - The most of the data that comes from apis is inform of an array objects. So you must be well informed of arrays to be a great developer. Check out the mozilla Dev docs to know more about arrays in javascript.
