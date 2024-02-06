/* - Blue when the mouse hovers over the square
- Red when the mouse button is held down over the square
- Yellow when the mouse button is let go over the square
- Green when the mouse is double clicked in the square
- Orange when the mouse scroll is used somewhere in the window (not just over the square).
- You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color. 
Check out the key and keyCode property of `e.target` */

var box = document.querySelector("#myBox");

function changeRed() {
    box.style.backgroundColor = "red";
}
box.addEventListener("mousedown", changeRed);
function changeYellow() {
    box.style.backgroundColor = "yellow";
}
box.addEventListener("mouseup", changeYellow);
function changeGreen() {
    box.style.backgroundColor = "green";
}
box.addEventListener("dblclick", changeGreen);

function changeOrange() {
    box.style.backgroundColor = "orange";
}
box.addEventListener("mouseleave", changeOrange);

function changeColor(event) {
    if (event.key === "r") {
        box.style.backgroundColor = "red";
    } else if (event.key === "y") {
        box.style.backgroundColor = "yellow";
    } else if (event.key === "g") {
        box.style.backgroundColor = "green";
    } else if (event.key === "o") {
        box.style.backgroundColor = "orange";
    }
}

function keyTest(event) {
    var pressedKey = event.key.toLowerCase();
    if (pressedKey === "u") {
        box.style.backgroundColor = "pink";
    }
}

box.addEventListener("keydown", keyTest);
