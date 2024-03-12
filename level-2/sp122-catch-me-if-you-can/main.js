// function sum(x, y){
//     if (![x, y].every(number => typeof number === "number")) {
//             throw new Error("Both agruments must be numbers.");
//     }
//     return x + y;
// }

// try {
//     console.log(sum("1", "2"))
// } catch(error) {
//     console.log("An error occured: " + error);
// }

var user = {username: "sam", password: "123abc"};
function login(username, password){
    if (username !== user.username || password !== user.password) {
        throw new Error("You're an impostor!");
    } else {
        console.log("Login successful!")
    }
}

try {
    login("sam", "123abc");
} catch(err) {
    console.error(err.message);
}

try {
    login("tom", "123456");
} catch(err) {
    console.error(err.message);
}

  