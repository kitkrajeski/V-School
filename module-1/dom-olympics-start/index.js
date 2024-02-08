var header = document.getElementById("header");
header.style.textAlign = "center";
var newHeader = document.createElement("h1");
newHeader.textContent = "JavaScript made this!!!";
header.appendChild(newHeader);
var subHeader = document.createElement("h3");
subHeader.innerHTML = "<span style='color: gold';>Kit Krajeski</span> wrote the JavaScript";
header.appendChild(subHeader);

// document.querySelector(".message.left").textContent = "yo";
var leftOne = document.getElementById("left-one")
leftOne.textContent = "Zak's test"
document.querySelector(".message.right").textContent = "yo";
console.log(leftOne)
document.querySelector(".message.left:nth-child(3)").textContent = "wassup?";
document.querySelector(".message.right:nth-child(4)").textContent = "wassup?";
// var messagesL = document.querySelector(".left");
// var messageTres = document.querySelector(".left:nth-child(2)");
// messageTres.innerHTML = "wassup?";
// messagesL.appendChild(messageTres);

var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function() {
    var allMessages = document.querySelectorAll(".message");
    allMessages.forEach(function(message) {
        message.textContent = "";
    })
})
var messageL = document.querySelectorAll(".left");
console.log("messageL: ",messageL)
var messageR = document.querySelectorAll(".right");
var dropDown = document.getElementById("theme-drop-down");
console.log("dropDown: ", dropDown)
function changeTheme() {
    console.log(dropDown.value)
    if(dropDown.value === "theme-one"){
        messageL.forEach(x => {
            x.style.backgroundColor = "burlywood";
        })
        messageR.forEach(y => {
            y.style.backgroundColor = "blue"
        })
    } else if (dropDown.value === "theme-two"){
        messageL.forEach(x => {
            x.style.backgroundColor = "red";
        })
        messageR.forEach(y => {
            y.style.backgroundColor = "black"
        })
    }
}
dropDown.addEventListener("change", changeTheme);


