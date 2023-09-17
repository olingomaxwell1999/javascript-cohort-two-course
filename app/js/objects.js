//what sre objects? - Objects in JavaScript are data structures that store named values. They are similar to arrays, but instead of using indices to access values, objects use property names.

//Objects can be created using the object literal notation, which consists of a pair of curly braces {}. Inside the curly braces, you can list the properties of the object, separated by commas. Each property consists of a name, followed by a colon, followed by the value of the property.

//For example, the following code creates an object with two properties: name and age:

const person = {
  name: "John",
  age: 30,
};
console.log(person); //Object {name: 'John', age: 30}

//Objects can also be created using the Object() constructor. The following code creates an object with two properties: name and age:

const person2 = new Object();

person2.name = "John";

person2.age = 30;

console.log(person2);

//N/B - Objects are fundamental data types in JavaScript and are used extensively in web development.

//You can access the properties of an object using the dot notation or the bracket notation. The dot notation is more concise, but the bracket notation is more flexible.

//To access the name property of the person object using the dot notation, you would write:

console.log(person.name);

//To access the name property of the person object using the bracket notation, you would write:

console.log(person["name"]);

//N/B - Objects are fundamental data types in JavaScript and are used extensively in web development.

//You can also use the bracket notation to access properties that have spaces or other special characters in their names. For example, the following code would access the full name property of the person object:

console.log(person["full name"]);

//Objects can also have methods, which are functions that are associated with the object. Methods are defined using the function keyword, and they are called using the same syntax as regular functions.

//For example, the following code defines a method called greet that prints a message to the console:

const person3 = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

//To call the greet method on the person object, you would write:

person3.greet();

//This would output the following to the console:

//Hello, my name is John
