// function countVowels(str) {
//     // Your code here
//     // initialize counts and array to track vowels included
//     let numVowels = 0;
//     let vowels = []
//     // iterate through the string
//     for (let i = 0; i < str.length; i++) {
//     // conditional statment
//         if ("aeiou".includes(str[i])) {
//             // add count
//             numVowels ++;
//             // add vowel to returned array
//             vowels.push(str[i]);
//         }
//     }
//     return `${numVowels} (${vowels.join(", ")})`

// }

// console.log(countVowels("hello")); // Expected output: 2 (e, o)
// console.log(countVowels("programming")); // Expected output: 3 (o, a, i)
// console.log(countVowels("javascript")); // Expected output: 3 (a, a, i)

// function findLongestWord(str) {
//     return str.split(" ").reduce((longestWord, currentWord) => {
//         return currentWord.length > longestWord.length ? currentWord : longestWord
//     }, [""])
// }

// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); 
// // Expected output: 'quick'

// console.log(findLongestWord("A revolution without dancing is a revolution not worth having")); 
// // Expected output: 'revolution'

// function countCharacters(str) {
//     // Your code here
//     splitArray = str.split("")
//     return splitArray.reduce((counts, char) => {
//         if (char in counts) {
//             counts[char]++
//         } else {
//             counts[char] = 1
//         }
//         return counts
//     }, {})
// }

// console.log(countCharacters("hello"));
// // Expected output: { h: 1, e: 1, l: 2, o: 1 }

// console.log(countCharacters("javascript"));
// // Expected output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

// function walk(position, direction) {
//     let {x, y} = position 
//     if ((x >= 10 && direction === "d") || (x <= 0 && direction ===  "a")) {
//         return position
//     }
//     if ((y >= 10 && direction === "w") || (y <= 0 && direction === "s")) {
//         return position
//     }
//     if (direction === "d") {
//         x = x + 1
//     } else if (direction === "a") {
//         x = x - 1
//     } else if (direction === "w") {
//         y = y + 1
//     } else if (direction === "s") {
//         y = y - 1
//     }
//     return {x,y}
// }

// const position = { x: 10, y: 10 };

// console.log(walk(position, "d")); // Output: { x: 6, y: 5 }
// console.log(walk(position, "w")); // Output: { x: 5, y: 6 }
// console.log(walk(position, "a")); // Output: { x: 4, y: 5 }
// console.log(walk(position, "s")); // Output: { x: 5, y: 4 }
// console.log(walk(position, "x")); // Output: { x: 5, y: 5 }

// function isPalindrome(string) {
//     return string.toLowerCase().split("").reverse().filter(char => char !== " ").join("") === string.toLowerCase().split(" ").join("")
// }

// console.log(isPalindrome("A man a plan a canal Panama")); // Expected output: true
// console.log(isPalindrome("Was it a car or a cat I saw")); // Expected output: true
// console.log(isPalindrome("Hello world")); // Expected output: false
// console.log(isPalindrome("Doc note I dissent A fast never prevents a fatness I diet on cod")); // Expected output: false

function rollDice() {
  return Math.floor(Math.random() * 20) + 1
}

console.log(rollDice()); // Output: a random number between 1 and 20

function rollDiceAverage() {
    rolls = []
    for (let i = 0; i < 5; i++) {
        rolls.push(rollDice())
    }
    return rolls.reduce((acc, roll, index, array) => {
        acc += roll
        if (index === array.length - 1) {
            return Math.floor(acc / array.length)
        } else {
            return acc
        }
    }, 0)
}
  
  console.log(rollDiceAverage()); // Output: the average of 5 rolls of a 20-sided dice