var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

let splitInput = input.toLowerCase().split("")

let result = splitInput.reduce((acc, char) => {
    if (!alphabet.includes(char)) {
        return acc + char
    } else {
        let initialPosition = alphabet.indexOf(char)
        let cipheredPosition = alphabet[(initialPosition + shift) % alphabet.length]
        return acc + cipheredPosition
    }
}, [])
console.log(result)
// console.log(result)