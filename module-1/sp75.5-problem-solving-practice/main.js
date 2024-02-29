// let greatest = 0
// function isLargest(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > greatest) {
//             greatest = arr[i]
//         }
//     }
//     return greatest
// }
// console.log(isLargest([6, 13, 250, 3])) // => 250
// console.log(isLargest([3, 5, 2, 8, 1])) // => 8
// console.log(isLargest([-13, 40, 3, 0, 19, 22])) // => 40

// function lettersWithStrings(arr, x) {
//     let counter = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] === x) {
//                 counter.push(arr[i])
//             }
//         }
//     }
//     return counter
// }
// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!"))  // => ["$hello!", "test!"]
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []

// function isDivisible(num1, num2) {
//     if (num1 % num2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isDivisible(4, 2)) // => true
// console.log(isDivisible(9, 3)) // => true
// console.log(isDivisible(15, 4)) // => false

