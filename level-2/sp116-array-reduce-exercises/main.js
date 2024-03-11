// function total(arr) {
//     return arr.reduce((acc, num) => acc += num, 0); 
// }
 
//  console.log(total([1,2,3])); // 6

// function stringConcat(arr) {
//     return arr.reduce((acc, str) => acc + str, "");
// }
 
//  console.log(stringConcat([1,2,3])); // "123"

// function totalVotes(arr) {
//     return arr.reduce((voteTotal, voter) => {
//         if(voter.voted === true) {
//         voteTotal++; 
//         }
//         return voteTotal;
//     }, 0)
// }

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)); // 7


// Ben's Notes:
// function filter (arr, cb)  {
//     // loop through the array and return a new array with only items that pass the 'test'
//     const filtered = [];
//     for(let i = 0; i < arr.length; i ++){
//         if(cb(arr[i])){
//             filtered.push(arr[i])
//         }
//     }

//     return filtered
// } 

// const results = filter([1,2,3,4,], (x) => {return ''})
// // NaN 0 false undefined null ''

// console.log(results)

// function shoppingSpree(arr) {
//     return arr.reduce((total, item) => item.price += total, 0)
// }
 
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); // 227005
 
// function flatten(arr) {
//     return arr.reduce((empty, deflattened) => empty.concat(deflattened), [])
// }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce((peeps, peep) => {
        if (peep.age > 0 && peep.age <= 25) {
            peeps.numYoungPeople ++;
            if (peep.voted) {
                peeps.numYoungVotes ++;
            }
        } else if ( peep.age > 25 && peep.age <= 35) {
            peeps.numMidPeople ++;
            if (peep.voted) {
                peeps.numMidVotes ++;
            }
        } else if (peep.age > 35 && peep.age <= 55) {
            peeps.numOldPeople ++;
            if (peep.voted) {
                peeps.numOldVotes ++;
            }
        }         
        return peeps;
    }, {numYoungPeople: 0, numYoungVotes: 0, numMidPeople: 0, numMidVotes: 0, numOldPeople: 0, numOldVotes: 0})
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
