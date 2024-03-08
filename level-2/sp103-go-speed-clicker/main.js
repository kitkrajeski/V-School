const button = document.querySelector("button");
const counter = document.getElementById("counter");
let count = localStorage.getItem("counterValue");
counter.value = count;

const handleClick = () => {
    count++;
    counter.value = count;
    localStorage.setItem("counterValue", count);
}

button.addEventListener("click", handleClick);

setTimeout(() => {
    button.removeEventListener("click", handleClick);
}, 3000);



