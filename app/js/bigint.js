//What is a bigint? - A bigint is a data type that can represent whole numbers larger than 2^53-1 (the maximum number that can be represented by a 64-bit integer). Bigints are useful for representing large numbers that cannot be represented by a regular integer, such as the number of atoms in the universe or the number of seconds since the Big Bang.

//Bigints are created using the BigInt() function. The function can take an optional string argument, which is the number to be converted to a bigint. If no argument is provided, the bigint will be initialized to 0.

//For example, the following code creates a bigint that represents the number 12345678901234567890:

const bigint = BigInt("12345678901234567890");

console.log(bigint);

//Bigints can be used in the same way as regular integers. They can be added, subtracted, multiplied, and divided. They can also be compared to other bigints or to regular integers.

//For example, the following code adds two bigints together:

const bigint1 = BigInt("12345678901234567890");
const bigint2 = BigInt("98765432109876543210");

const sum = bigint1 + bigint2;

console.log(sum); // Output: 22222222211111111100

//N/B - Bigints are a powerful data type that can be used to represent very large numbers. They are supported in all modern JavaScript engines.
