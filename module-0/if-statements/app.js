var person = {
    name: "Bobby",
    age: 12
}
if (person.name[0] === "B" && person.age > 18) {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
}

if (1 === "1") {
    console.log("strict");
} if (1 == "1") {
    console.log("loose");
} else {
    console.log("not equal at all");
}

if (1 <= 2 && 2 === 4) {
    console.log("yes");
} else {
    console.log("no");
}

if (typeof "dog" === "string") {
    console.log("true");
}

if (typeof true === "boolean") {
    console.log("true")
}

var cat = "Fatso";
if (typeof cat === 'undefined') {
    console.log('is undefined');
} else {
    console.log('is defined');
}

var num = 9

if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}