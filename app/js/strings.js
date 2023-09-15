//STRING

// What is a string? - A string in JavaScript is a data type used to represent textual data. Strings are enclosed in either single or double quotes, and can contain any combination of characters, including letters, numbers, and symbols.

// Strings can be created using the following syntax: -

let string = "This is a string";

console.log(string);

//strings can be manipulated in various ways. in this state we use methods to manipulate the strings.

//some of the methods and properties are

//length - this returns the number of characters present in a string ie:-

let string2 = "Manchester is a big team!";

console.log(string2.length);

//the above expression is going to return the number of characters present in the string. I this case it also counts space😂😂😂😂

//toUpperCase() - this method converts the string to uppercase.(Capital letters)

console.log(string2.toUpperCase());

//the above statement will convert the string2 to capital letters. it will look like this "MANCHESTER IS A BIG TEAM!"

//toLowerCase() - this method converts the string to lowercase.(Small letters)

console.log(string2.toLowerCase());

//the above statement will convert the string2 to small letters. it will look like this "manchester is a big team!"

//charAt() - this method returns the character present at the specified index.

console.log(string2.charAt(0));

//the above statement will return the character present at the index 0.

//indexOf() - this method returns the index of the first occurrence of the specified value.

console.log(string2.indexOf("is"));

//the above statement will return the index of the first occurrence of the specified value

//lastIndexOf() - this method returns the index of the last occurrence of the specified value.

console.log(string2.lastIndexOf("s"));

//the above statement will return the index of the last occurrence of the specified value

//concat() - This is used to join two string.

console.log(string2.concat(string));

//the above statement will return the string2 concatenated with the string

//match() - searches the string for a specified pattern and returns an array of matches.

console.log(string2.match("is"));

//the above statement will return the array of matches

//replace() - replaces all occurrences of a specified pattern in the string with a new string.

console.log(string2.replace("is", "are"));

//the above statement will replace all occurrences of a specified pattern in the string with a new string

//split() - splits a string into an array of substrings.

console.log(string2.split(" "));

//the above statement will split the string into an array of substrings

//search() - searches the string for a specified pattern and returns the index of the first match.

console.log(string2.search("is"));

//the above statement will return the index of the first match

//slice() - extracts a substring from the string.

console.log(string2.slice(0, 4));

//the above statement will extract a substring from the string

//more on strings can be found on the official MDN docs or any other online resource talking a
