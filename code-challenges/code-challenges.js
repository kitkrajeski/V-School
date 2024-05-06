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

// function rollDice() {
//   return Math.floor(Math.random() * 20) + 1
// }

// console.log(rollDice()); // Output: a random number between 1 and 20

// function rollDiceAverage() {
//     rolls = []
//     for (let i = 0; i < 5; i++) {
//         rolls.push(rollDice())
//     }
//     return rolls.reduce((acc, roll, index, array) => {
//         acc += roll
//         if (index === array.length - 1) {
//             return Math.floor(acc / array.length)
//         } else {
//             return acc
//         }
//     }, 0)
// }

//   console.log(rollDiceAverage()); // Output: the average of 5 rolls of a 20-sided dice

// function buildTable(data) {
//     let keys = Object.keys(data[0]).map(key => key.charAt(0).toUpperCase() + key.slice(1))
//     let values = [] 
//     data.map(entry => {
//         return values.push(Object.values(entry))
//     })
//     return [keys, ...values]
// }

// function buildTable(data) {
//     const result = []
//     for (let i = 0; i < data.length; i++) {
//             if (i === 0) {
//                     result.push(Object.keys(data[i]))
//                     result.push(Object.values(data[i]))
//             } else {
//                     result.push(Object.values(data[i]))
//             }
//     }
//     return result
// }

// const data = [
//     { name: "John Doe", age: 30, profession: "Engineer" },
//     { name: "Alice Smith", age: 25, profession: "Teacher" },
//     { name: "Bob Brown", age: 40, profession: "Doctor" }
// ];

// console.log(buildTable(data));
// Expected output:
//  [
//     ["Name", "Age", "Profession"],
//     ["John Doe", 30, "Engineer"],
//     ["Alice Smith", 25, "Teacher"],
//     ["Bob Brown", 40, "Doctor"]
// ]

// function fizzBuzz(n) {
//     return Array.from({length: n}, (_, i) => {
//         i++
//         if (i % 3 === 0 && i % 5 === 0) {
//             return "Fizzbuzz"
//         } else if (i % 3 === 0) {
//             return "Fizz"
//         } else if (i % 5 === 0) {
//             return "Buzz"
//         } else {
//             return i
//         }
//     })
// }

// console.log(fizzBuzz(15)); // Expected output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
// console.log(fizzBuzz(10)); // Expected output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]

// function attack(armorClass = 0) {
//     // const attackRoll = Math.floor(Math.random() * 20) + 1
//     const attackRoll = 9
//     console.log(1)
//     return attackRoll === 20 ? 'Critical Hit' : attackRoll === 1 ? "You slipped and fell" : attackRoll - armorClass > 10 ? 'Successful hit' : 'Failed hit'
// }

// console.log(attack()); // Output: "Your attack was successful!" or "Your attack failed!" or "Critical hit!" or "You slipped and fell while attacking, how embarrassing."

// function mergeSortedArrays(arr1, arr2) {
//     return ([...arr1, ...arr2]).sort((a, b) => a - b)
// }

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Expected output: [1, 2, 3, 4, 5, 6]
// console.log(mergeSortedArrays([10, 20, 30], [5, 15, 25])); // Expected output: [5, 10, 15, 20, 25, 30]
// class Gobbie {
//     constructor() {
//         this.hitPoints= (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
//         this.expPoints= Math.floor(this.hitPoints / 2)
//     }
// }
// function generateGoblins() {
//     let gobbies = []
//     const numGobbies = (Math.floor(Math.random() * 6) + 1) * 2
//     console.log(numGobbies)
//     for (let i = 0; i < numGobbies; i++) {
//         gobbies.push(new Gobbie()); 
//     }
//     return gobbies
//   }
  
//   const goblins = generateGoblins();
//   console.log(goblins);
  // Output: An array of goblins, with each goblin having hitPoints and expPoints properties

// function findPrimesInRange(start, end) {
//     let primes = []
//     for (let i = start ; i <= end ; i++) {
//         let isPrime = true
//         for (let j = 2 ; j < i ; j ++) {
//             if (i % j === 0) {
//                 isPrime = false
//                 break
//             }
//         } if (i > 1 && isPrime) {
//             primes.push(i)
//         }
//     }
//     return primes
// }

// console.log(findPrimesInRange(10, 20)); // Expected output: [11, 13, 17, 19]
// console.log(findPrimesInRange(1, 5)); // Expected output: [2, 3, 5]
// // Optional Challenge
// console.log(findPrimesInRange(10, 1)); // Expected output: [2, 3, 5, 7]

function checkNumber(num) {
    return num < 0 ? "Negative" : num > 0 ? "Positive" : (isNaN(num) ? `${num} isn't a number, it's a ${typeof num}` : "Zero")
    
  }
  
  console.log(checkNumber(5)); // Output: "positive"
  console.log(checkNumber(-10)); // Output: "negative"
  console.log(checkNumber(0)); // Output: "zero"
  console.log(checkNumber("October"))