var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr) {
    return ((arr.filter(person => person.age > 18)).sort((a, b) => a.lastName.localeCompare(b.lastName))).reduce((accumulator, person) => {
        return [...accumulator, `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`]
    }, []);
}

console.log(sortedOfAge(peopleArray));

/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/

// Ben's notes:
// // const sum = (a, b) => a + b
// const reduce = (arr, cb, initial) => {
//     let output = initial;
//     for(let i = 0; i < arr.length; i ++){
//         output = cb(output, arr[i]);
//     }

//     return output;
// }

// const getThing = (thing) => { return thing};

// console.log(getThing(12 * 40 < 2 - 65%2))