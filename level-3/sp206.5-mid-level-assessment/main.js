// Challenge 1: Sort Array with Preserved Index for -1 Values
// You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

// Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

// All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.

// function solution(arr){
//     let filteredArray = arr.filter(num => num !== -1).sort((a, b) => a-b);
//     return arr.map(function(num) {
//         if (num !== -1) {
//             return filteredArray.shift()
//         } else {
//             return num
//         }
//     });
// }

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))

// !!!CODE CHALLENGE FROM SLACK!!!
// function findCommonElements(arr1, arr2) {
//     const commonElements = arr1.filter(num => arr2.includes(num))
//     return [...new Set(commonElements)];
// }

// console.log(findCommonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // Expected output: [3, 4, 5]
// console.log(findCommonElements(["apple", "banana", "orange"], ["orange", "kiwi", "apple"])); // Expected output: ["apple", "orange"]
// console.log(findCommonElements([true, false, true], [true, true, false])); // Expected output: [true, false]

// function countVowels(str) {
//     let numVowels = 0;
//     let splitString = str.split("")
//     splitString.forEach(char => {
//         const isCharacterAVowel = char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//         if (isCharacterAVowel)
//             numVowels ++
//     })
//     return numVowels

    // for(let i = 0; i < str.length; i ++){
    //     if(['a','i','e','o','u'].includes(str[i])) numVowels++
    // }
    // return numVowels

    // return ['a','i','e','o','u'].filter(vowel => str.includes(vowel)).length
    // const vowelsMap = {
    //     a: 0,
    //     i: 0,
    //     e: 0,
    //     o: 0,
    //     u: 0
    // }
    // for(let i = 0; i < str.length; i++){
    //     if(vowelsMap[str[i]] !== undefined) 
    //         vowelsMap[str[i]]++
    // }
    // return Object.keys(vowelsMap).reduce((sum, key) => sum +vowelsMap[key], 0)
// }

// const input = 'Hello, World!';

// console.log(countVowels(input)); // Output: 3

// const input1 = 'Counting Vowels';

// console.log(countVowels(input1)); // Output: 5

// !!!CODE CHALLENGE FROM SLACK!!!

// function rotateArray(arr, k) {
//     let newArray = [];
//     for (i = 0; i < k; i++) {
//         let removedElement = arr.pop();
//         newArray.unshift(removedElement);
//     }
//     return [...newArray, ...arr];
// }

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Expected output: [4, 5, 1, 2, 3]
// console.log(rotateArray(['a', 'b', 'c', 'd', 'e'], 3)); // Expected output: ['c', 'd', 'e', 'a', 'b']