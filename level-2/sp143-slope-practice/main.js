// function collectAnimals(...animals) {
//     const arr = [];
//     arr.push(...animals);
//     console.log(arr);
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// const combineFruit = (fruit, sweets, vegetables) => ({fruit: fruit, sweets: sweets, vegetables: vegetables}) 

// const combinedFruit = combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])

// console.log(combinedFruit);
             //=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }


// function parseSentence({location, duration}){
//     console.log(`We're going to have a good time in ${location} for ${duration}`)
//     }
    
// parseSentence({
// location: "Burly Idaho",
// duration: "2 weeks"
// });

// function returnFirst(items){
//     const [firstItem] = items; /*change this line to be es6*/
//     return firstItem
// }

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     let [firstFav, secondFav, thirdFav, fourthFav, ...] = favoriteActivities
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
// }

// console.log(returnFavorites(favoriteActivities))

// function combineAnimals(...args) {
//     let combined = [].concat(...args);
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

// const products = (...args) => args.reduce((acc, num) => acc * num, 1)

// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
// }

// const unshift = (array, ...args) => [...args, ...array];

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}
populatePeople = names => names.map(name => {
    const [firstName, lastName] = name.split(" ")
    return {firstName, lastName};
});

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

    

//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

