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

function countCharacters(str) {
    // Your code here
    splitArray = str.split("")
    return splitArray.reduce((counts, char) => {
        if (char in counts) {
            counts[char]++
        } else {
            counts[char] = 1
        }
        return counts
    }, {})
}

console.log(countCharacters("hello"));
// Expected output: { h: 1, e: 1, l: 2, o: 1 }

console.log(countCharacters("javascript"));
// Expected output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }