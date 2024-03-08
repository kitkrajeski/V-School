// function doubleNumbers(arr) {
//     return arr.map(num => num * 2);
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// function stringItUp(arr) {
//     return arr.map(str => str.toString());
// }

// console.log(stringItUp([2, 5, 100]));

// function capitalizeNames(arr){
//     return arr.map(str => str[0].toUpperCase() + str.substring(1).toLowerCase());
// }
          
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// function namesOnly(arr){
//     return arr.map(obj => obj.name);
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));

// function makeStrings(arr){
//     return arr.map(obj => {
//         if (obj.age > 18) {
//             return `${obj.name} can go to the Matrix`
//         }
//         else {
//             return `${obj.name} is underage!!`
//         }
//     })
// }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));

function readyToPutInTheDOM(arr){
    return arr.map(obj => {
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        
        h1.textContent = obj.name;
        h2.textContent = obj.age;

        // Assuming you want to return both elements together, you could put them in a div.
        let div = document.createElement("div");
        div.appendChild(h1);
        div.appendChild(h2);

        return div;
    })        
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));


  
