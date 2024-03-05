const readline = require("readline-sync");
const question = "You enter into a room with a hole in the wall and a door. You can open the door, investigate the hole, or look for a key. What do you do? "
// const userInput = askQuestion();
function askQuestion() {
    // get user response
    const userInput = readline.question(question);
    // inquire about the response
    // either youre dead or not
    // if investiagete --> return
    // askQuestion()
    // return readline.question(question);
    if (userInput === "investigate the hole") {
        console.log("YOU ARE DEAD!!!");
    }
    if (userInput === "open the door") {
        console.log("You do not have the key.");
        askQuestion();
    }
    if (userInput === "look for a key") {
        console.log("Somehow, you indeed found a key.")
        const gotKey = readline.question("Do you want to open this door? Yes or No? ");
        if (gotKey.toLowerCase() === "yes") {
            console.log("You enter into another room with a Dragon. You are now also DEAD!!!");
        }
    }
}
askQuestion();


    
