//What is an array? - An array is a data structure that stores a collection of elements of the same type. In JavaScript, arrays are zero-indexed, meaning that the first element in an array is at index 0.

// Arrays can be created using the following syntax:

const array = [element1, element2, elementN];

// arrays can contain all the javascript datatypes like for instance, you can have an array containing strings like below:

const arrayStr = ["string1", "string2", "string3"];

// arrays can also contain other arrays like below:

const array2 = [
  [element1, element2, elementN],
  [element1, element2, elementN],
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

//push() - This method adds an element to the end of an array.

const array9 = ["string1", "string2", "string3"];

array9.push("string4");

console.log(array9);

//the above statement will add the string4 to the end of the array

//pop() - This method removes the last element from an array.

const array10 = ["string1", "string2", "string3"];

array10.pop();

console.log(array10);

//the above statement will remove the last element from the array

//shift() - This method removes the first element from an array.

const array11 = ["string1", "string2", "string3"];

array11.shift();

console.log(array11);

//the above statement will remove the first element from the array

//unshift() - This method adds an element to the beginning of an array.

const array12 = ["string1", "string2", "string3"];

array12.unshift("string4");

console.log(array12);

//the above statement will add the string4 to the beginning of the array

//splice() - This method removes and/or adds elements to an array.

const array13 = ["string1", "string2", "string3"];

array13.splice(1, 1, "string4");

console.log(array13);

//the above statement will remove and/or add the string4 to the array
