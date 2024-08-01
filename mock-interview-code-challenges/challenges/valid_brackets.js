/**
 * @description - determine whether given string has valid placement of brackets
 * @difficulty - 4/5
 *
 * @param {String} str
 * @returns {Boolean}
 *
 * @example - validBrackets('[[[') // --> false
 * @example - validBrackets('[]') // --> true
 * @example - validBrackets('[[][]][]') // --> true
 * @example - validBrackets('[[]]][][[]') // --> false
 */

[].reduce(() => {
  return "";
}, "");

//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "]") {
//       count += 1;
//       if (count > 0) {
//         return false;
//       }
//     } else {
//       count -= 1;
//     }
//   }
//   return count === 0;
//   const openBrackets = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "[") openBrackets.push(str[i]);
//     else {
//       if (!openBrackets.length) return false;
//       openBrackets.pop();
//     }
//   }
//   return openBrackets.length === 0;
//   let openBrackets = [];
//   let closedBrackets = [];
//   for (let i = 0; i < str.length; i++)
//     if (str[i] === "[") {
//       openBrackets.push(i);
//     } else {
//       closedBrackets.push(i);
//     }
//   if (openBrackets.length !== closedBrackets.length) {
//     return false;
//   }
const sumOpenBrackets = openBrackets.reduce((acc, val) => {
  return acc + val;
}, 0);
//   const sumClosedBrackets = closedBrackets.reduce((acc, val) => {
//     return acc + val;
//   }, 0);
//   if (sumClosedBrackets < sumOpenBrackets) {
//     return true;
//   }
/**
 *
 * @param {String} str
 * @returns {Boolean}
 */
// const validBrackets = (str) => {
//   if (str[0] === "]") {
//     return false;
//   }
//   let openBrackets = [];
//   let closedBrackets = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "[") {
//       openBrackets.push(i);
//     } else if (str[i] === "]") {
//       closedBrackets.push(i);
//     }
//   }
//   if (openBrackets.length !== closedBrackets.length) {
//     return false;
//   }
//   for (let i = 0; i < closedBrackets.length; i++) {
//     let matched = false;
//     for (let j = 0; j < openBrackets.length; j++) {
//       if (openBrackets[j] < closedBrackets[i]) {
//         matched = true;
//         // openBrackets.splice(j, 1);
//         break;
//       }
//     }
//     if (!matched) {
//       return false;
//     }
//   }
//   return true;
// };

module.exports = validBrackets;
