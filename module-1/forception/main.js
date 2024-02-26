// var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
// var alphabet = "abcdefghijklmnopqrstuvwxyz"
// alphabet = alphabet.toUpperCase()
// console.log(alphabet);
// var peopleAlpha = [];
// for (var i = 0; i < people.length; i++) {
//     peopleAlpha.push(people[i]);
//     for (var j = 0; j < alphabet.length; j++) {
//         peopleAlpha.push(alphabet[j]);
//     }    
// }
// console.log(peopleAlpha)

var cap = capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"

function capitalize(string) {
    var characters = string.split("");
    for (let i = 0; i < string.length; i++) {
        if (string[i - 1] === " ") {
            characters[i] = string[i].toUpperCase();
        } 
        if (i === 0) {
            characters[i] = string[0].toUpperCase();
        }
    }
    return characters.join("");
}
console.log(cap);

var age = 2
age = 3
console.log(age)
age = 5
var otherAge = age
otherAge = 6
console.log(otherAge)