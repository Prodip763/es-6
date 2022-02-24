const numbers = [2, 4, 6, 8];
const output = [];
const doubleIt = number => number * 2;
// for (const number of numbers) {
//     const result = doubleIt(number);
//     output.push(result);
// }
// console.log(output);
// loop through each element 
// for each Element call the provided function 
// result for each element will be store in an array

// const output = numbers.map(doubleIt);
const output = numbers.map(number => number * 2);
console.log(output);