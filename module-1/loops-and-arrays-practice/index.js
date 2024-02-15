// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// var count = 0
// for (i = 0; i < officeItems.length; i++) {
//     if (officeItems[i] === "computer") {
//         count ++
//     }
// }
// console.log(count)

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ]

// for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) { 
// const isOldEnough = peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18;
// const isMale = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male';
// const firstName = peopleWhoWantToSeeMadMaxFuryRoad[i].name;   
//     if(isOldEnough){
//         if(isMale){
//             console.log(firstName + " is old enough. HE'S good to see Mad Max Fury Road.")
//         } else {
//             console.log(firstName + " is old enough. SHE'S good to see Mad Max Fury Road.")
//         }
//     } else {
//         if(isMale) {
//             console.log(firstName + " is not old enought to see Mad Max Fury Road, don't let HIM in.")
//         } else {
//             console.log(firstName + " is not old enought to see Mad Max Fury Road, don't let HER in.")
//         }
//     }
// }  
var arr = [2, 5, 435, 4, 3];
var sum = 0; 
for (let i = 0; i < arr.length; i++) {
    sum += arr[i] 
}
if (sum % 2 === 0) {
    console.log("it's off");
} else {
    console.log("it's on");
}

console.log(sum % 2 === 0 ? 'off' : 'on')
console.log(sum);

