// grab form name rather than id (?)
const userInput = document.addItem
// grab list element for appending and 
const listContainer = document.getElementById("list");

userInput.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputField = userInput.title.value;
    const listInput = inputField;
    console.log(listInput);
    const newItem = document.createElement("li");
    const newListItem = document.createElement("div");
    newListItem.textContent = listInput;
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
    userInput.title.value = "";
});

listContainer.addEventListener("click", event => {TextMetrics
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
