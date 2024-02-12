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
    const inputField = document.getElementById("title");
    const listInput = inputField.value;
    console.log(listInput);
    const newItem = document.createElement("li");
    const newListItem = document.createElement("div");
    newListItem.textContent = listInput;
    // newItem.insertAdjacentHTML("afterbegin", "<div>".concat(listInput, "</div>"))
    // newItem.classList.add("list");
    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";
    buttonEdit.classList.add("editButton");
    const buttonDel = document.createElement("button");
    buttonDel.textContent = "X";
    buttonDel.classList.add("deleteButton");
    newItem.appendChild(newListItem);
    newItem.appendChild(buttonEdit);
    newItem.appendChild(buttonDel);
    listContainer.appendChild(newItem);
    inputField.value = "";
});

listContainer.addEventListener("click", event => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("deleteButton")) {
        const listItem = clickedElement.parentNode;
        listItem.remove();
    } else if (clickedElement.classList.contains("editButton")) {
        const listItem = clickedElement.parentNode;
        const currentText = listItem.childNodes[0].textContent.trim();
        const inputField = document.createElement("input");
        const buttonSub = document.createElement("button")
        buttonSub.textContent = "Submit";
        inputField.type = "text";
        inputField.value = currentText;
        inputField.textContent = "";
        listItem.appendChild(inputField);
        listItem.appendChild(buttonSub);
        buttonSub.addEventListener("click", event => {
            listItem.childNodes[0].textContent = inputField.value;
            inputField.remove();
            buttonSub.remove();
        })
    }
})
