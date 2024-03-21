const axios = require("axios");

// const lukeSkywalker = axios.get("https://swapi.dev/api/people/1").then(response => {
//         console.log(response.data);
//     }).catch(error => {
//         console.log(error)
//     })

// console.log(lukeSkywalker);

const newTodo = {
    title: "axios to do baby!",
    price: 400000000000000000000000000,
}

const kitKat = axios.post("https://api.vschool.io/kitkrajeski/todo/", newTodo).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error)
    })

