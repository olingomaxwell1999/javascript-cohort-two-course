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
