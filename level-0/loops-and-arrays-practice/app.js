var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0
for (i = 0; i <= officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count ++;
    }
}
console.log(count);

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
 
  
  for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    var person = peopleWhoWantToSeeMadMaxFuryRoad[i];
    var pronoun;
    if (person.gender === "male") {
        pronoun = "HE";
    } else {
        pronoun = "SHE"
    }
    if (person.age >= 18) {
        console.log(person.name + " is old enough. " + pronoun + "'S good to see the movie");
    } else {
        console.log(person.name + " is not old enough. " + pronoun + "'S not good to see the movie");
    }
  }

  var array = [2, 3, 2]
  var sum = 0;
  var isLightOn;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
    if (sum % 2 === 0) {
        console.log("the light is off");
    } else {
        console.log("the light is on");
    }
  }
  console.log(sum)

  