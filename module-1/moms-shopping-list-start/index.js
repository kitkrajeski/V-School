// const userInput = document.getElementById('form[name="addItem"]');
// const listContainer = document.getElementById("list");
// userInput.addEventListener ("submit", (event) => {
//     event.preventDefault();
//     const listInput = document.getElementById("title").value;
//     console.log(listInput);
// })
const userInput = document.querySelector('form[name="addItem"]');
const listContainer = document.getElementById("list");

userInput.addEventListener("submit", (event) => {
    event.preventDefault();
    const listInput = document.getElementById("title").value;
    
});
