// function fiveAndGreaterOnly(arr) {
//     return arr.filter(number => number > 5);
// }

//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
  
// function evensOnly(arr) {
//     return arr.filter(num => num % 2 === 0);
// }
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
  
// function fiveCharactersOrFewerOnly(arr) {
//     return arr.filter(str => str.length < 5);
// }
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  
// function peopleWhoBelongToTheIlluminati(arr){
//     return arr.filter(obj => obj.member);
// }
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));

function ofAge(arr){
    return arr.filter(obj => obj.age > 19);
}
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
