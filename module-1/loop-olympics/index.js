// # **Bronze Medal**

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// 3. Write a for loop that will push every other fruit to an array.
// `const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`
// let arr = []
// for (let i = 0; i <= 9; i++) {
//     arr.push(i);    
// }
// console.log(arr);
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (i = 0; i < fruit.length; i += 2) {
//     console.log(fruit[i]);
// }
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
// 1. Write a loop that will print out all the names of the people of the people array
//for (let i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name);
// }
// 2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// var names = [];
// var occupations = [];
// for (i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
// }
// console.log(names);
// console.log(occupations);
// 3. 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".
// var names = [];
// var occupations = [];
// for (i = 0; i < peopleArray.length; i += 2) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i + 1].occupation);
// }  
// console.log(names)
// console.log(occupations)
// 1. Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]
// var outerArray = [];
// var number = 0;
// var length = 3;
// for (let i = 0; i < length; i++) {
//     var nestedArray = [];
//     for (let j = 0; j < length; j++) {
//         nestedArray.push(number);
//     }
//     outerArray.push(nestedArray);
// }
// console.log(outerArray);
// var outerArray = [];
// var length = 3;
// for (let i = 0; i < length; i++) {
//     var nestedArray = [];
//     for (let j = 0; j < length; j++) {
//         nestedArray.push(i);
//     }
//     outerArray.push(nestedArray);
// }
// console.log(outerArray);
// var outerArray = [];
// var length = 3;
// for (let i = 0; i < length; i++) {
//     var nestedArray = [];
//     for (let j = 0; j < length; j++) {
//         nestedArray.push(j);
//     }
//     outerArray.push(nestedArray);
// }
// console.log(outerArray);
// var outerArray = [];
// var letter = "x"
// var length = 3;
// for (let i = 0; i < length; i++) {
//     var nestedArray = [];
//     for (let j = 0; j < length; j++) {
//         nestedArray.push(letter);
//     }
//     outerArray.push(nestedArray);
// }
// console.log(outerArray);
var outerArray = [];
var length = 3;
for (let i = 0; i < length; i++) {
    var nestedArray = [];
    for (let j = 0; j < length; j++) {
        nestedArray.push(0);
    }
    outerArray.push(nestedArray);
}
console.log(outerArray);