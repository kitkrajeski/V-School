var quantities = [0, 0, 0, 0, 0, 0]
var increment = [40, 50, 1, 1, 1, 1]

function incrementCounter() {
    var inputField = document.getElementById("sourdoughDiscard");
    var currentValue = parseInt(inputField.value, 10);

    if (currentValue < 500) {
        inputField.value = currentValue + 50;

        for (var i = 0; i < list.children.length; i ++) {
            quantities[i] += increment[i];
            list.children[i].textContent = list.children[i].textContent.split(":")[0] + ": " + quantities[i];
        }
    }
}
console.log(incrementCounter())
var person = {
    name: "Bobby",
    age: 12,
    gender: "male",
    allowed: false
}

if (person.age >= 18) {
    console.log(person.name + " can go to the movie.");
} else {
    console.log(person.name + " cannot go to the movie.");
}

wordsArray = ["banana", "orange", "apple", "grape", "apple", "kiwi", "apple", "banana", "apple", "apple"]

var count = 0
for (i = 0; i > wordsArray.length; i ++) {
    if (wordsArray[i] === "apple") {
        count +=1;
    }
} 

function stringLength(inputString) {
    if (inputString.length >= 20) {
        return inputString + inputString;
    } else {
        return inputString.slice(0, (inputString.length/2));
    }
}