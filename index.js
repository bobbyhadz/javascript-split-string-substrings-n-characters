// EXAMPLE 1 - Split a String every N characters in JavaScript

const str = 'bobbyhadzabc';

const result = str.match(/.{1,4}/g) || [];

// 👇️ [ 'bobb', 'yhad', 'zabc' ]
console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Split a String every N characters using a `for` loop

// function splitEveryN(str, n) {
//   const arr = [];

//   for (let index = 0; index < str.length; index += n) {
//     arr.push(str.slice(index, index + n));
//   }

//   return arr;
// }

// // 👇️ [ 'bobb', 'yhad', 'zabc' ]
// console.log(splitEveryN('bobbyhadzabc', 4));

// // 👇️ [ 'bo', 'bb', 'yh', 'ad', 'za', 'bc' ]
// console.log(splitEveryN('bobbyhadzabc', 2));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Split a String every N characters using recursion

// function splitEveryN(str, n, arr = []) {
//   if (str.length === 0) {
//     return arr;
//   }

//   arr.push(str.slice(0, n));
//   return splitEveryN(str.slice(n), n, arr);
// }

// // 👇️ [ 'bobb', 'yhad', 'zabc' ]
// console.log(splitEveryN('bobbyhadzabc', 4));

// // 👇️ [ 'bo', 'bb', 'yh', 'ad', 'za', 'bc' ]
// console.log(splitEveryN('bobbyhadzabc', 2));
